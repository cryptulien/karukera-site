import { spawnSync } from "node:child_process";
import { mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "kit");
const destDir = join(root, "private");
const dest = join(destDir, "karukera-security-kit.zip");
const enc = join(destDir, "karukera-security-kit.zip.enc");

function fail(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

function packFromKit() {
  const py = `
import os, zipfile, sys
src, dest = sys.argv[1], sys.argv[2]
count = 0
with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _dirs, files in os.walk(src):
        for f in files:
            path = os.path.join(root, f)
            z.write(path, os.path.relpath(path, src))
            count += 1
print(count)
`;
  const r = spawnSync("python3", ["-c", py, src, dest], { encoding: "utf8" });
  if (r.status !== 0) fail(r.stderr || "pack failed");
  return Number((r.stdout || "").trim()) || 0;
}

function encryptZip() {
  const secret = process.env.KIT_DOWNLOAD_SECRET;
  if (!secret) {
    console.warn("KIT_DOWNLOAD_SECRET missing — skip encrypt");
    return false;
  }
  const r = spawnSync(
    "openssl",
    [
      "enc",
      "-aes-256-cbc",
      "-salt",
      "-pbkdf2",
      "-pass",
      "env:KIT_DOWNLOAD_SECRET",
      "-in",
      dest,
      "-out",
      enc,
    ],
    { encoding: "utf8", env: process.env },
  );
  if (r.status !== 0) fail(r.stderr || "encrypt failed");
  return true;
}

function decryptZip() {
  const secret = process.env.KIT_DOWNLOAD_SECRET;
  if (!secret) fail("KIT_DOWNLOAD_SECRET required to decrypt kit zip");
  const r = spawnSync(
    "openssl",
    [
      "enc",
      "-d",
      "-aes-256-cbc",
      "-pbkdf2",
      "-pass",
      "env:KIT_DOWNLOAD_SECRET",
      "-in",
      enc,
      "-out",
      dest,
    ],
    { encoding: "utf8", env: process.env },
  );
  if (r.status !== 0) fail(r.stderr || "decrypt failed");
}

mkdirSync(destDir, { recursive: true });

if (existsSync(src)) {
  const count = packFromKit();
  const { size } = statSync(dest);
  const encrypted = encryptZip();
  console.log(
    "packed",
    dest,
    count,
    "files",
    size,
    "bytes",
    encrypted ? "+ encrypted" : "",
  );
} else if (existsSync(enc)) {
  decryptZip();
  const { size } = statSync(dest);
  console.log("decrypted", dest, size, "bytes");
} else if (existsSync(dest)) {
  const { size } = statSync(dest);
  console.log("reuse existing", dest, size, "bytes");
} else {
  fail("kit/ missing and no encrypted zip to decrypt");
}
