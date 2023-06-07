import axios from "axios";
import https from "https";

const address = `tools.emailmatrix.ru`;

const getCalendar = (dataObj) => {
    const data = JSON.stringify(dataObj);
    console.log(data);

    return new Promise ((resolve, reject) => {
        axios({
                method: 'post',
                url: 'https://tools.emailmatrix.ru/event-generator/',
                data: data,
                responseType: 'application/json'
            }).then(function (answer) {
                // let answerObj = JSON.parse(answer);
                console.log(JSON.parse(answer));
                // console.log(`ics: ${answerObj.ics}\ngoogle: ${answerObj.google}\n\n`);
    
                dataObj.ics = answerObj.ics;
                dataObj.google = answerObj.google;
    
                console.log(dataObj);
                resolve(dataObj);
            })
            .catch(function (error) {
                console.log(error);
            });

    });
};

export default getCalendar;