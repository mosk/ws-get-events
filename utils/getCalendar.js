import * as ics from "ics";
import { writeFileSync } from "fs";
import { v4 as uuid } from "uuid";
import { name } from "../index.js";

const pathICS = `https://port25.ru/istatic/ws/ics/`; // path to upload ics

const getCalendar = (dataObj) => {
  const dataJSON = JSON.stringify({
    apikey: dataObj.apikey,
    start: dataObj.start,
    end: dataObj.end,
    timezone: "Europe/Moscow",
    title: dataObj.title,
    description: dataObj.description,
  });

  return new Promise((resolve, reject) => {
    const title = encodeURI(dataObj.title);
    const desc = encodeURI(dataObj.description);
    const start = dataObj.start.split("-").join("").split(":").join("").split(" ").join("T");
    const end = dataObj.end.split("-").join("").split(":").join("").split(" ").join("T");
    const ICSname = uuid();

    const make = (err) => {
      if (err) {
        return reject(new Error("statusCode=" + err));
      }

      dataObj.ics = `${pathICS}${name}--${ICSname}.ics`;
      dataObj.google = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}00Z-06:00/${end}00Z-06:00&details=${desc}&sf=true&output=xml`;

      ics.createEvent(
        {
          title: dataObj.title,
          description: dataObj.description,
          start: [
            +dataObj.start.split("-")[0],
            +dataObj.start.split("-")[1],
            +dataObj.start.split("-")[2].split(" ")[0],
            +dataObj.start.split(" ")[1].split(":")[0],
            +dataObj.start.split(" ")[1].split(":")[1],
          ],
          duration: { hours: 3 },
        },
        (error, value) => {
          if (error) {
            console.log(error);
          }

          writeFileSync(`ics/${name}--${ICSname}.ics`, value);
        }
      );

      console.log(dataObj);

      resolve(dataObj);
    };

    make();
  });
};

export default getCalendar;
