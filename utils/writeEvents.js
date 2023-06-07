import fs from "fs";
import getHTML from "./getHTML.js";
import getEvents from "./getEvents.js";

const writeEvents = (dataArray, name) => {
    fs.writeFile(`ws__${name}.html`, "", function (err) {
        if (err) return console.log(err);

        let html = getHTML(dataArray);

        fs.appendFile(`ws__${name}.html`, html, function (err) {
            if (err) return console.log(err);
        });
    });
};

export default writeEvents;