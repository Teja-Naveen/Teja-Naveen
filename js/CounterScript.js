// alert("🎁🎉🎂🎁 Advance Happy Birthday🎁🎉🎂🎁");
const dateSettingsButton = document.getElementById("date-settings");

/* Date settings (UTC) */
let utcYear = 2023,
    utcMonth = 5,
    utcDay = 14,
    utcHour = 0,
    utcMinute = 0,
    utcSeconds = 0;

let countUpDate = new Date(utcYear, utcMonth - 1, utcDay, utcHour, utcMinute, utcSeconds);

/**
 * Converts a single digit number to a two digit string
 * @param {number} numberToConvert 
 */
const numberToTwoDigitsString = (numberToConvert = null) => {
    if (numberToConvert = null) {
        return;
    }
    if (numberToConvert <= 9 && numberToConvert >= 0) return "0" + numberToConvert;
    return "" + numberToConvert;
};

/**
 * Updates the date information on the page
 */
const updateDateInformation = () => {
    let dateNow = new Date();
    let timeNow = dateNow.getTime();
    let diffBetweenDates = timeNow - countUpDate.getTime();

    let dateDefinitions = [];
    dateDefinitions["years"] = Math.floor(diffBetweenDates / (1000 * 60 * 60 * 24 * 365));
    dateDefinitions["days"] = Math.floor(diffBetweenDates % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    dateDefinitions["hours"] = Math.floor(diffBetweenDates % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    dateDefinitions["minutes"] = Math.floor(diffBetweenDates % (1000 * 60 * 60) / (1000 * 60));
    dateDefinitions["seconds"] = Math.floor(diffBetweenDates % (1000 * 60) / (1000));

    for (key in dateDefinitions) {
        const element = document.getElementById(key);
        element.querySelector("h1").innerText = dateDefinitions[key];
        element.querySelector("p").innerText = (dateDefinitions[key] == 1 ? key.replace(/.$/, "") : key);
    }
};

/**
 * Starts updateDateInformation periodically
 */
const count = setInterval(() => {
    updateDateInformation();
}, 1000);

updateDateInformation();


    classesToToggle.forEach(classToToggle => {
        element.classList.toggle(classToToggle);
    });
};

