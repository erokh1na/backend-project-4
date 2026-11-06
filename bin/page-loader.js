#!/usr/bin/env node

import { program } from "commander";
import pageLoader from "../src/index.js";

program
  .name("page-loader")
  .description("Page loader utility")
  .argument("<url>")
  .option("-o, --output <dir>", "output dir", process.cwd())
  .action((url, options) => pageLoader(url, options.output).then(console.log));

program.parse();
