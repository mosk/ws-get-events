const renderEvent = (data, type = `regular`) => {
  if (type == `regular`) {
    return `
    <td class="col" valign="top" width="300" style="display: inline-block; width: 300px; padding: 0; padding-bottom: 50px;">
        <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td style="padding: 0; padding-bottom: 18px; text-align: center;">
                <a href="${data.url}">
                <img src="${data.img}" width="280" height="187" alt="">
                </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 8px; text-align: left;">
                <a href="${data.url}" style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 16px; line-height: 1.5; color: #1F1F26; font-weight: 700; text-decoration: none;">
                ${data.title}
                </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 14px; text-align: left;">
                <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                ${data.description}
                </span>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 10px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                <td valign="top" width="38" style="padding: 0; text-align: left;">
                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgr" width="28" height="28" alt="Дата">
                </td>
                <td valign="top" style="padding: 0; padding-top: 3px; text-align: left;">
                <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                <b style="color: #1F1F26;">Дата:</b> 
                ${data.date}
                </span>
                </td>
                </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 10px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                <td valign="top" width="38" style="padding: 0; text-align: left;">
                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgs" width="28" height="28" alt="Цена">
                </td>
                <td valign="top" style="padding: 0; padding-top: 3px; text-align: left;">
                <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                <b style="color: #1F1F26;">Цена:</b> 
                ${data.price} руб.
                </span>
                </td>
                </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 10px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                <td valign="top" width="38" style="padding: 0; text-align: left;">
                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgo" width="28" height="28" alt="Календарь">
                </td>
                <td valign="top" style="padding: 0; padding-top: 3px; text-align: left;">
                <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                <b style="color: #1F1F26;">Добавить в календарь:</b>
                </span>
                </td>
                </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                <td valign="middle" width="34" style="padding: 0; text-align: left;"></td>
                <td valign="middle" width="168" style="padding: 0; text-align: left;">
                <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                <td width="33%" valign="middle" style="padding: 0; text-align: center;">
                <a href="${data.google}">
                    <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgp" width="46" height="46" alt="Android">
                </a>
                </td>
                <td width="33%" valign="middle" style="padding: 0; text-align: center;">
                <a href="${data.ics}">
                    <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgn" width="46" height="46" alt="IOS">
                </a>
                </td>
                <td width="33%" valign="middle" style="padding: 0; text-align: center;">
                <a href="${data.ics}">
                    <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgq" width="46" height="46" alt="Windows">
                </a>
                </td>
                </tr>
                </table>
                </td>
                <td style="padding: 0;"></td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
    </td>`;
  } else if (type == `fullwidth`) {
    return `
    <td class="col col--1" valign="top" width="300" style="display: inline-block; width: 300px; padding: 0; padding-bottom: 50px;">
        <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td style="padding: 0; padding-bottom: 18px; text-align: center;">
                    <a href="${data.url}">
                        <img src="${data.img}" width="280" height="187" alt="">
                    </a>
                </td>
            </tr>
        </table>
    </td>
    <td class="col col--2" valign="top" width="300" style="display: inline-block; width: 300px; padding: 0; padding-bottom: 50px;">
        <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 8px; text-align: left;">
                    <a href="${data.url}" style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 16px; line-height: 1.5; color: #1F1F26; font-weight: 700; text-decoration: none;">
                        ${data.title}
                    </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 14px; text-align: left;">
                    <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                        ${data.description}
                    </span>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 10px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td valign="top" width="38" style="padding: 0; text-align: left;">
                                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgr" width="28" height="28" alt="Дата">
                            </td>
                            <td valign="top" style="padding: 0; padding-top: 3px; text-align: left;">
                                <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                                    <b style="color: #1F1F26;">Дата:</b> ${data.date}
                                </span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 10px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td valign="top" width="38" style="padding: 0; text-align: left;">
                                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgs" width="28" height="28" alt="Цена">
                            </td>
                            <td valign="top" style="padding: 0; padding-top: 3px; text-align: left;">
                                <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                                    <b style="color: #1F1F26;">Цена:</b> ${data.price} руб.
                                </span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 10px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td valign="top" width="38" style="padding: 0; text-align: left;">
                                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgo" width="28" height="28" alt="Календарь">
                            </td>
                            <td valign="top" style="padding: 0; padding-top: 3px; text-align: left;">
                                <span style="font-family: Roboto, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.5; color: #666666;">
                                    <b style="color: #1F1F26;">Добавить в календарь:</b>
                                </span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; padding-left: 20px; padding-right: 20px; padding-bottom: 20px;">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td valign="middle" width="34" style="padding: 0; text-align: left;"></td>
                            <td valign="middle" width="168" style="padding: 0; text-align: left;">
                                <table cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td width="33%" valign="middle" style="padding: 0; text-align: center;">
                                            <a href="${data.google}">
                                                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgp" width="46" height="46" alt="Android">
                                            </a>
                                        </td>
                                        <td width="33%" valign="middle" style="padding: 0; text-align: center;">
                                            <a href="${data.ics}">
                                                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgn" width="46" height="46" alt="IOS">
                                            </a>
                                        </td>
                                        <td width="33%" valign="middle" style="padding: 0; text-align: center;">
                                            <a href="${data.ics}">
                                                <img src="https://login.inboxer.pro/app/public/file/view/12a/2fgq" width="46" height="46" alt="Windows">
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td style="padding: 0;"></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>`;
  } else {
    console.log(`Error`);

    return null;
  }
};

const getHTML = (events) => {
  let eventsList = `
<tr>
<td style="padding: 0; padding-left: 10px; padding-right: 10px;">
<table cellpadding="0" cellspacing="0" width="100%">
<tr style="font-size: 0; text-align: center;">`;

  for (let i = 0; i < events.length; i++) {
    let event = events[i];
    let eventNumber = i + 1;

    // console.log(eventNumber, event.title);

    if (eventNumber == events.length && eventNumber % 2 != 0) {
      eventsList += renderEvent(event, `fullwidth`);
      eventsList += `
</tr>
</table>
</td>
</tr>`;
    } else if (eventNumber == events.length && eventNumber % 2 == 0) {
      eventsList += renderEvent(event);
      eventsList += `
</tr>
</table>
</td>
</tr>`;
    } else {
      eventsList += renderEvent(event);

      if (eventNumber % 2 == 0 && eventNumber != events.length) {
        eventsList += `
</tr>
</table>
<table cellpadding="0" cellspacing="0" width="100%">
<tr style="font-size: 0; text-align: center;">`;
      }
    }
  }

  return eventsList;
};

export default getHTML;
