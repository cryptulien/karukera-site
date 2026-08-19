import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  KITS,
  checkoutDeniedFor,
  githubCloneUrl,
  githubHttpsUrl,
  isOpenSource,
  type KitOffer,
} from "../lib/kit-offer.ts";

const paidKit: KitOffer = {
  sku: "security-kit",
  slug: "security",
  filename: "karukera-security-kit.zip",
  priceCents: 19700,
  cancelPath: "/agents/security",
  name: { fr: "paid", en: "paid", es: "paid" },
  description: { fr: "paid", en: "paid", es: "paid" },
};

describe("open-source kits", () => {
  it("marks security-kit and sales-secretary as MIT open source", () => {
    assert.equal(isOpenSource(KITS["security-kit"]), true);
    assert.equal(isOpenSource(KITS["sales-secretary"]), true);
    assert.equal(KITS["security-kit"].openSource?.githubRepo, "cryptulien/karukera-security-kit");
    assert.equal(KITS["sales-secretary"].openSource?.githubRepo, "cryptulien/karukera-sales-secretary");
    assert.equal(KITS["security-kit"].openSource?.license, "MIT");
    assert.equal(KITS["sales-secretary"].openSource?.license, "MIT");
  });

  it("does not treat a kit without openSource as open source", () => {
    assert.equal(isOpenSource(paidKit), false);
  });

  it("builds public GitHub and clone URLs", () => {
    assert.equal(
      githubHttpsUrl("cryptulien/karukera-security-kit"),
      "https://github.com/cryptulien/karukera-security-kit",
    );
    assert.equal(
      githubCloneUrl("cryptulien/karukera-security-kit"),
      "https://github.com/cryptulien/karukera-security-kit.git",
    );
  });

  it("blocks checkout for open-source kits and leaves paid kits checkoutable", () => {
    const denied = checkoutDeniedFor(KITS["security-kit"]);
    assert.ok(denied);
    assert.equal(denied.status, 409);
    assert.equal(denied.github, "https://github.com/cryptulien/karukera-security-kit");
    assert.match(denied.error, /open source/i);

    const secretary = checkoutDeniedFor(KITS["sales-secretary"]);
    assert.ok(secretary);
    assert.equal(secretary.github, "https://github.com/cryptulien/karukera-sales-secretary");

    assert.equal(checkoutDeniedFor(paidKit), null);
  });
});
