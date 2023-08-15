const array = [29, 17, 13, 47, 23, 31];

// Global
let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     // console.log(i, array[i]);
//     sum += array[i]; // += 29,17,13,47,23,31
// }

// for (let index in array) {
//     sum += array[index];
// }

// for (let el of array) {
//     sum += el;
// }

[29, 17, 13, 47, 23, 31].forEach((item) => (sum += item));

console.log(sum);
