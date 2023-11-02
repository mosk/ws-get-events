import https from "https";

const address = `tools.emailmatrix.ru`;

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
    const newData = dataJSON;

    const options = {
      hostname: address,
      port: 443,
      path: "/event-generator/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = https.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }

      let body = [];
      let answerObj;

      res.on("data", (answer) => {
        body.push(answer);
      });

      res.on("end", () => {
        const title = encodeURI(dataObj.title);
        const desc = encodeURI(dataObj.description);
        const start = dataObj.start.split("-").join("").split(":").join("").split(" ").join("T");
        const end = dataObj.end.split("-").join("").split(":").join("").split(" ").join("T");

        body = JSON.parse(Buffer.concat(body).toString());

        dataObj.ics = body.ics;
        dataObj.google = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}00Z-06:00/${end}00Z-06:00&details=${desc}&sf=true&output=xml`;

        // console.log(`Событие ${dataObj.id + 1}: \n`, dataObj);

        resolve(dataObj);
      });
    });

    req.on("error", (error) => {
      console.log("Error: /n", error.message);
    });

    req.write(newData);
    req.end();
  });
};

export default getCalendar;
