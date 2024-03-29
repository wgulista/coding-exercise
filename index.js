const fs = require('fs');
const readline = require('readline');

async function getFullNameList(filename) {
    let fullNameList = [];
    let fileNameStream = fs.createReadStream(filename);

    let rl = readline.createInterface({
        input: fileNameStream,
        output: process.stdout,
        terminal: false
    });

    for await (const line of rl) {
        const lineSplit = line.split(' -- ');
        if (lineSplit.length > 1) {
            fullNameList.push(lineSplit[0]);
        }
    }
    return fullNameList;
}

function filterUniqueNames(list, type) {
    switch (type) {
        case 'full':
            return [...new Set(list)];
            break;
        case 'first':
            const firstNameList = list.map(l => {
                return l[0];
            });
            return [...new Set(firstNameList.sort())];
            break;
        case 'last':
            const lastNameList = list.map(l => {
                return l[1];
            });
            return [...new Set(lastNameList.sort())];
            break;
        default:
            return [];
    }
}

function sortObjectList(objectList) {
    const sortable = [];
    for (var object in objectList) {
        sortable.push([object, objectList[object]]);
    }

    return sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
}

function getTenNameList(list) {
    const getTenList = [];
    for (let i = 0; i < 10; i++) {
        getTenList.push(list[i]);
    }
    return getTenList;
}

function getTenCommonName(list, type) {
    const getNumber = type === 'first' ? 0 : 1;
    const firstNameObjectList = {};

    const newList = list.map(name => {
        return name[getNumber];
    });

    newList.forEach(key => {
        if (firstNameObjectList.hasOwnProperty(key)) {
            firstNameObjectList[key]++;
        } else {
            firstNameObjectList[key] = 1;
        }
    });

    const sortList = sortObjectList(firstNameObjectList).reverse();

    return getTenNameList(sortList);
}

(async function() {
    const filename = './test-data-10-exp-5.list';
    const fullNameList = await getFullNameList(filename);

    const uniqueFullNameLength = filterUniqueNames(fullNameList, 'full').length;

    const splitFullNameList = fullNameList.map(fullName => {
        return fullName.split(',');
    });

    const uniqueFirstNameLength = filterUniqueNames(splitFullNameList, 'first').length;
    const uniqueLastNameLength = filterUniqueNames(splitFullNameList, 'last').length;

    const getTenCommonFirstName = getTenCommonName(splitFullNameList, 'first');
    const getTenCommonLastName = getTenCommonName(splitFullNameList, 'last');
})();
