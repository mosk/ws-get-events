import images from "./images.js";
import convertDate from "./convertDate.js";
import "dotenv/config";

const apikey = process.env.EMAILMATRIX_APIKEY;
const getEvent = (evtString, id) => {
  return new Promise((resolve, reject) => {
    let clearTitle = evtString.replace(/\n/g, `~`).split(`~`)[1].replace(/    /g, ``).replace(/  /g, ``).trim("");
    let clearDesc = evtString.replace(/\n/g, `~`).split(`~`)[2].replace(/    /g, ``).replace(/  /g, ``).trim("");
    let clearLink = evtString
      .replace(/\n/g, `~`)
      .split(`~`)[0]
      .replace(/Ссылка: /g, ``)
      .replace(/ /g, ``);
    let clearPrice = evtString
      .replace(/\n/g, `~`)
      .split(`~`)[4]
      .replace(/Цена: /g, ``)
      .replace(/руб./g, ``)
      .replace(/  /g, ``);
    let clearDate = evtString
      .replace(/\n/g, `~`)
      .split(`~`)[3]
      .replace(/Дата: /g, ``)
      .replace(/  /g, ``);
    let img = null;
    let ics = `ics#${id + 1}`;
    let google = `google#${id + 1}`;
    let timeStartForAPI = convertDate(clearDate).start;
    let timeEndForAPI = convertDate(clearDate).end;
    let result;

    if (images[clearTitle]) {
      img = images[clearTitle];
    }

    resolve({
      apikey: apikey,
      title: clearTitle,
      description: clearDesc,
      url: clearLink,
      img: img,
      date: clearDate,
      price: clearPrice,
      start: timeStartForAPI,
      end: timeEndForAPI,
      id: id,
      ics: ics,
      google: google,
    });
  });
};

export default getEvent;
