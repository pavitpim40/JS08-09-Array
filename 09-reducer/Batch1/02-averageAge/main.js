let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];
/*
let arr = [
	{ name: 'John', age: 27 },
	{ name: 'Jo', age: 21 },
	{ name: 'Jin', age: 25 },
]
*/

// console.log(getAverageAge(arr));

// FN : (array) => number

function getAverageAge(array) {
    // Algorithm = SUM age / no.person
    // const sumAge = array.reduce((acc, personObj) => {
    //     let age = personObj.age;
    //     return acc + age;
    // }, 0);

    const sumAge = array.reduce((a, c) => a + c.age, 0);
    return sumAge / array.length;
}

const result = getAverageAge(arr);
console.log(result);
