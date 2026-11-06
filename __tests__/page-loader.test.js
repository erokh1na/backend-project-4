import { test, describe, beforeAll, beforeEach, afterEach, expect } from "vitest";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import nock from "nock";
import pageLoader from "../src/index.js";

const getFixturePath = (filename) => path.join(import.meta.dirname, "..", "__fixtures__", filename);
const readFixture = (filename) => fs.readFile(getFixturePath(filename), "utf-8");

describe("pageLoader", () => {
  let tempDir;
  let html;

  beforeAll(async () => {
    nock.disableNetConnect();

    html = await readFixture("page.html");
  });

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "page-loader-"));
  });

  afterEach(async () => {
    nock.cleanAll();

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  test("downloads page and returns path to saved file", async () => {
    const scope = nock("https://example.com").get("/page").reply(200, html);
    const filepath = await pageLoader("https://example.com/page", tempDir);

    expect(filepath).toBe(path.join(tempDir, "example-com-page.html"));
    expect(await fs.readFile(filepath, "utf-8")).toBe(html);
    expect(scope.isDone()).toBe(true);
  });
});
