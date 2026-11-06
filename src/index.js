import axios from "axios";
import fs from "node:fs/promises";
import makeFilename from "./make-filename.js";
import path from "node:path";

export default (url, outputDir = process.cwd()) => {
  const fileName = makeFilename(url);
  const fullPath = path.resolve(outputDir, fileName);

  return axios
    .get(url)
    .then((res) => res.data)
    .then((data) => fs.writeFile(fullPath, data))
    .then(() => fullPath);
};
