const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const filename = './test-data-10-exp-5.list';

var instream = fs.createReadStream(filename);
var outstream = new stream({
  readable: true
});

var lineReader = readline.createInterface({
  input: instream,
  output: outstream,
  terminal: false
});

const uniqueFullNamesCount = line => {
  let countUniqueFullNames = 0;
  let fullNameList = [];
  lineReader.on('line', line => {
    lineSplit = line.split(' -- ');
    if (lineSplit.length > 1) {
      fullNameList.push(lineSplit[0]);
    }
  });

  lineReader.on('close', function() {
    countUniqueFullNames = [...new Set(fullNameList.sort())].length;
    console.log(`There are ${countUniqueFullNames} unique full name.`);
  });
};

const uniqueFirstNamesCount = line => {
  let countUniqueFirstName = 0;
  let firstNameList = [];
  lineReader.on('line', line => {
    lineSplit = line.split(' -- ');
    if (lineSplit.length > 1) {
      let firstName = lineSplit[0].split(',');
      firstNameList.push(firstName[0]);
    }
  });

  lineReader.on('close', function() {
    countUniqueFirstName = [...new Set(firstNameList.sort())].length;
    console.log(`There are ${countUniqueFirstName} unique first name.`);
  });
};

const uniqueLastNamesCount = line => {
  let countUniqueLastName = 0;
  let lastNameList = [];
  lineReader.on('line', line => {
    lineSplit = line.split(' -- ');
    if (lineSplit.length > 1) {
      let lastName = lineSplit[0].split(',');
      lastNameList.push(lastName[1]);
    }
  });

  lineReader.on('close', function() {
    countUniqueLastName = [...new Set(lastNameList.sort())].length;
    console.log(`There are ${countUniqueLastName} unique last name.`);
  });
};

const main = () => {
  uniqueFullNamesCount();
  uniqueFirstNamesCount();
  uniqueLastNamesCount();
};

main();
