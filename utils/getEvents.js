import images from "./images.js";
import getEvent from "./getEvent.js";
import getCalendarLocal from "./getCalendarLocal.js";
import eventsArray from "../eventsArray.js";

const getEvents = (arr = eventsArray) => {
    const events = [];
    
    return new Promise ((resolve, reject) => {
        arr.forEach((item, i) => {
            console.log(`start ${i}`);

            setTimeout(() => {
                console.log(i);

                getEvent(item, i).then((data) => {
                    return new Promise((resolve, reject) => {
                        console.log(JSON.stringify(data));
                        // resolve(data);
                        // здесь обновление календарей
                        resolve(getCalendarLocal(data));
                    });
                }).then((data) => {
                    events.push(data);
                    console.log(events.length, arr.length);
    
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