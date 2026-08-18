import { spawnSync } from "node:child_process";
import { mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const destDir = join(root, "private");

const PACKAGES = [
  {
    id: "security-kit",
    src: join(root, "kits", "security-kit"),
    dest: join(destDir, "karukera-security-kit.zip"),
    enc: join(destDir, "karukera-security-kit.zip.enc"),
  },
  {
    id: "sales-secretary",
    src: join(root, "kits", "sales-secretary"),
    dest: join(destDir, "karukera-sales-secretary.zip"),
    enc: join(destDir, "karukera-sales-secretary.zip.enc"),
  },
];

function fail(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

function packFromDir(src, dest) {
  const py = `
import os, zipfile, sys
src, dest = sys.argv[1], sys.argv[2]
skip = {".git", "__pycache__", ".pytest_cache", "node_modules", ".env"}
count = 0
with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk(src):
        dirs[:] = [d for d in dirs if d not in skip]
        for f in files:
            if f.endswith(".pyc") or f == ".env":
                continue
            path = os.path.join(root, f)
            z.write(path, os.path.relpath(path, src))
            count += 1
print(count)
`;
  const r = spawnSync("python3", ["-c", py, src, dest], { encoding: "utf8" });
  if (r.status !== 0) fail(r.stderr || "pack failed");
  return Number((r.stdout || "").trim()) || 0;
}

function openssl(args) {
  return spawnSync("openssl", args, { encoding: "utf8", env: process.env });
}

function encryptZip(dest, enc) {
  const secret = process.env.KIT_DOWNLOAD_SECRET;
  if (!secret) {
    console.warn("KIT_DOWNLOAD_SECRET missing — skip encrypt");
    return false;
  }
  const r = openssl([
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
  ]);
  if (r.status !== 0) fail(r.stderr || "encrypt failed");
  return true;
}

function decryptZip(enc, dest) {
  const secret = process.env.KIT_DOWNLOAD_SECRET;
  if (!secret) fail("KIT_DOWNLOAD_SECRET required to decrypt kit zip");
  const r = openssl([
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
  ]);
  if (r.status !== 0) fail(r.stderr || "decrypt failed");
}

mkdirSync(destDir, { recursive: true });

let ok = 0;
for (const pkg of PACKAGES) {
  if (existsSync(pkg.src)) {
    const count = packFromDir(pkg.src, pkg.dest);
    const { size } = statSync(pkg.dest);
    const encrypted = encryptZip(pkg.dest, pkg.enc);
    console.log("packed", pkg.id, pkg.dest, count, "files", size, "bytes", encrypted ? "+ encrypted" : "");
    ok += 1;
  } else if (existsSync(pkg.enc)) {
    decryptZip(pkg.enc, pkg.dest);
    const { size } = statSync(pkg.dest);
    console.log("decrypted", pkg.id, pkg.dest, size, "bytes");
    ok += 1;
  } else if (existsSync(pkg.dest)) {
    const { size } = statSync(pkg.dest);
    console.log("reuse existing", pkg.id, pkg.dest, size, "bytes");
    ok += 1;
  } else {
    console.warn("skip", pkg.id, "— no source and no encrypted zip");
  }
}

if (ok === 0) fail("no kit could be packed or decrypted");
