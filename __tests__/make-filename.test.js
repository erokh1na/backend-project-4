import { test, describe, expect } from "vitest";
import makeFilename from "../src/make-filename.js";

describe("makeFilename tests", () => {
  test("default link", () => {
    expect(makeFilename("https://github.com/erokh1na")).toBe("github-com-erokh1na.html");
  });

  test("http link", () => {
    expect(makeFilename("http://github.com/erokh1na")).toBe("github-com-erokh1na.html");
  });

  test("link with query params", () => {
    expect(makeFilename("https://github.com/erokh1na?query=param")).toBe(
      "github-com-erokh1na.html",
    );
  });

  test("nested path", () => {
    expect(makeFilename("https://ru.hexlet.io/courses/js-basics")).toBe(
      "ru-hexlet-io-courses-js-basics.html",
    );
  });

  test("root link", () => {
    expect(makeFilename("https://github.com")).toBe("github-com.html");
  });

  test("trailing slash", () => {
    expect(makeFilename("https://github.com/erokh1na/")).toBe("github-com-erokh1na.html");
  });
});
