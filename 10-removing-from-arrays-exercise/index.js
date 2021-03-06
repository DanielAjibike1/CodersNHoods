/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall"]
 */

/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */

const carBrands = ["Mercedes", "Volvo", "BMW", "Citroen", "Vauxhall"]; // changed Reno in original array to Citroen
carBrands.pop("Vauxhall");
console.log(carBrands);

/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.shift("Mercedes");
console.log(carBrands);

/**
 * Exercise 3
 *
 * from "carBrands" remove "BMW"
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.splice(1, 1);
console.log(carBrands);

/**
 * Exercise 4
 *
 * in "carBrands" replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.splice(1, 1, "Rolls-Royce");
