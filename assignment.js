'use strict';

// Assuming populations array is defined
const populations = [1441, 1393, 331, 273]; // Example populations in millions

// Assuming percentageOfWorld1 function is defined
const percentageOfWorld1 = (population) => (population / 7900) * 100; // Example function

const percentages3 = [];

let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);