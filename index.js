import writeEvents from "./utils/writeEvents.js";
import getEvents from "./utils/getEvents.js";

import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

export let name = `чтотобезназвания`;

const rl = readline.createInterface({ input, output });

rl.question(`Название (например, '070623--spb')\n`, (name) => {
  console.log("Ракета запущена...");

  let currentName = name;

  if (name.length === 0) {
    currentName = "чтотобезназвания";
  }

  getEvents()
    .then((data) => {
      writeEvents(data, currentName);
    })
    .catch((err) => console.log(err));

  rl.close();
});
