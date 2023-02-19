const fs = require("fs");

const breedDetailsFromFile = (breed, callback) => {
  console.log("breedDetailsFromFile: Calling readfile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile Callback: it has the data.");
    if (error) callback(undefined);
    else callback(data);
  });
};

const printOutCat = (catInfo) => {
  console.log("Return value: " + catInfo);
};

// breedDetailsFromFile('Saphire', printOutCat);
// const bombay = breedDetailsFromFile("Bombay", printOutCat);
// console.log("Return Value: ", bombay); // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;