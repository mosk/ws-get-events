import writeEvents from "./utils/writeEvents.js";
import getEvents from "./utils/getEvents.js";

export const name = `021123`;

getEvents()
  .then((data) => {
    console.log(data);
    writeEvents(data, name);
  })
  .catch((err) => console.log(err));
