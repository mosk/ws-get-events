import images from "./images.js";
import getEvent from "./getEvent.js";
import getCalendar from "./getCalendar.js";
import eventsArray from "../eventsArray.js";

const getEvents = (arr = eventsArray) => {
  const events = [];

  return new Promise((resolve, reject) => {
    arr.forEach((item, i) => {
      setTimeout(() => {
        getEvent(item, i)
          .then((data) => {
            return new Promise((resolve, reject) => {
              // resolve(data);
              // здесь обновление календарей
              resolve(getCalendar(data));
            });
          })
          .then((data) => {
            events.push(data);

            if (i === arr.length - 1) {
              events.sort((a, b) => {
                if (a.id > b.id) {
                  return 1;
                }

                if (a.id < b.id) {
                  return -1;
                }

                return 0;
              });

              resolve(events);
            }
          });
      }, 1000 * i);
    });
  });
};

export default getEvents;
