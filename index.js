import writeEvents from "./utils/writeEvents.js";
import getEvents from "./utils/getEvents.js";

export const name = `070623--ex`;

getEvents().then((data) => {
  console.log(data);
  writeEvents(data, name);
}).catch(err => console.log(err));
