const log = console.log;

// #1
// const array = [1, 2, 30, 400];
// result: [2, 4, 60, 800]

// const newArray = array.map((num) => num * 2);
// const newArray = array.map((element) => {
//     return element * 2;
// });
// const newArray = array.map(function (item, index, array) {
//     // do logic...
//     return item * 2;
// });

// log(newArray);

// #8
// const array = [0, 5, 10, 7, 6, 5, 0];
// const array = [1, 6, 11, 8, 7, 6, 1];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const newArray = array.map((monthIndex) => MONTHS[monthIndex]);
// 1st : 0 => MONTHS[0] == "Jan"
// 2nd : 5 => MONTHS[5] == "Jun"

// log(newArray);

// #9
// const array = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
// 1 => 1
// 16 => 2  (2**4 == 16)
// 81 => 3  (3**4)== 81)

// const newArray = array.map((n) => Math.sqrt(Math.sqrt(n)));
// log(newArray);

// #10
// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 },
// ];
// result: ["apple", "banana", "watermelon"]

// const newArray = array.map(function (fruitObj) {
//     // console.log(fruitObj.name);
//     return fruitObj.name;
// });

// log(newArray);

// #13
// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-01' },
//     { name: 'watermelon', birth: '1985-12-01' },
// ];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

// { name: 'apple', birth: '2000-01-01' } => { name: "apple", birth: "2000-01-01", age: 21 },
// diff age

// const newArray = array.map(function (fruitObj) {
//     // create NewFruit Object
//     const newFruitObj = Object.assign({}, fruitObj);
//     const birthYear = +fruitObj.birth.slice(0, 4);
//     newFruitObj.age = 2021 - birthYear;
//     // log(newFruitObj);
//     return newFruitObj;
// });
// log(newArray);

// #14
const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' },
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

// INPUT (JS-OBJ) : { name: 'apple', birth: '2000-01-01' }
// OUTPUT (STRING HTML TAG) : <tr><td>apple</td><td>01 jan 2000</td></tr>
// OBJ => STRING
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const newArray = array.map(function (obj) {
    // retrieve value from each obj
    let name = obj.name;
    const day = obj.birth.slice(-2);
    const monthIndex = obj.birth.slice(-5, -3) - 1;
    const year = obj.birth.slice(0, 4);
    // create string
    const resultString = `<tr> <td>${name}</td> <td>${day} ${MONTHS[
        monthIndex
    ].toLowerCase()} ${year}</td> </tr>`;

    // return string
    return resultString;
});

log(newArray);
