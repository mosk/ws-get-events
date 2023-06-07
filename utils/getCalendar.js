import https from "https";

const address = `tools.emailmatrix.ru`;

const getCalendar = (dataObj) => {
    const dataJSON = JSON.stringify({
        "apikey" : dataObj.apikey,
        "start" : dataObj.start,
        "end" : dataObj.end,
        "timezone" : "Europe/Moscow",
        "title" : dataObj.title,
        "description" : dataObj.description
    });

    return new Promise ((resolve, reject) => {
        const newData = dataJSON;
        
        const options = {
            hostname: address,
            port: 443,
            path: "/event-generator/",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        };
    
        const req = https.request(options, res => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                // console.log(dataObj.id);
                // console.log(newData);
                
                return reject(new Error('statusCode=' + res.statusCode));
            }

            let body = [];
            let answerObj;
          
            res.on('data', answer => {
                body.push(answer);
            });
            
            res.on('end', () => {
                body = JSON.parse(Buffer.concat(body).toString());

                dataObj.ics = body.ics;
                dataObj.google = body.google;
    
                console.log(dataObj);

                resolve(dataObj);
            });
        });
    
        req.on('error', error => {
            console.log(error.message);
        });

        req.write(newData);
        req.end();
    });
};

export default getCalendar;