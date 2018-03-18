'use strict';

// The crash-incidents.csv file contains data of road crash-incidents.
// (id; location; surface type; surface condition; light condition; weather condition; crash date; year)
// Your task will be to count how many crash-incidents happened at good/bad
// weather conditions.
// Good weather conditions are CLOUDY and CLEAR.
// Bad weather conditions are RAIN, FREEZING RAIN, SNOW, FOG and SEVERE CROSSWINDS.
// So create the necessary method(s) that returns with the amount of crash-incidents.
// And print the return value to the console:
// The amount of crashes at good weather conditions: {amount}
// The amount of crashes at bad weather conditions: {amount}

const fs = require('fs');

function crashConditions(filename: string): any {
    let countGood: number = 0;
    let countBad: number = 0;
    let readTextArray: any[] = fs.readFileSync(filename, 'utf-8').split(';');
    for (let i: number = 0; i < readTextArray.length; i++) {
        if (readTextArray[i] === 'CLOUDY' || readTextArray[i] === 'CLEAR') {
            countGood++;
        } if (readTextArray[i] === 'RAIN' || readTextArray[i] === 'FREEZING RAIN' || readTextArray[i] === 'FOG' || readTextArray[i] === 'SNOW' || readTextArray[i] === 'SEVERE CROSSWINDS') {
            countBad++;
        }
    }
    return `
    The amount of crashes at good weather conditions: ${countGood}
    The amount of crashes at bad weather conditions: ${countBad}
    `;
};

console.log(crashConditions('crash-incidents.csv'));