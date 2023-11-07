const convertDate = (str) => {
  let day = null;
  let month = null;
  let year = 2023;
  let time = null;

  let monthNames = [
    `января`,
    `февраля`,
    `марта`,
    `апреля`,
    `мая`,
    `июня`,
    `июля`,
    `августа`,
    `сентября`,
    `октября`,
    `ноября`,
    `декабря`,
  ];

  // day
  if (str.includes(`,`)) {
    day = str.split(`,`)[0].replace(/  /g, ``).replace(/ /g, ``);
  } else {
    day = str.split(` `)[0].replace(/  /g, ``).replace(/ /g, ``);
  }

  if (day < 10) {
    day = `0${day}`;
  }

  //month
  let i = 1;
  while (!str.includes(monthNames[i - 1])) {
    month = i;
    i++;
  }

  if (month < 9) {
    month = `0${month + 1}`;
  } else {
    month = `${month + 1}`;
  }

  // hour & minute
  let timeStr = str.match(/[0-9][0-9]\:[0-9][0-9]/);

  if (timeStr !== null) {
    time = timeStr[0];
  } else {
    time = `19:00`;
  }

  // console.log(`${year}-${month}-${day} ${time}`);

  return {
    start: `${year}-${month}-${day} ${time}`,
    end: `${year}-${month}-${day} 21:00`,
  };
};

export default convertDate;
