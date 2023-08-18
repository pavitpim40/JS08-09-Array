const log = console.log;

// const array = [9, 17, 23, 5];
// ค่าที่มากกว่า 10

// const newArray = array.filter(function (num) {
//     // if (num > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     // if (num > 10) return true;
//     // return false;

//     // return num > 10 ? true : false;
//     return num > 10;
// });

// const newArray = array.filter((n) => n > 10);
// log(newArray);

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E

// const filteredArr = array.filter((animal) => animal[0].toLowerCase() === 'e');
// log(filteredArr);

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

// Boolean Expression => Solve to Boolean
// "APPLE".toUpperCase() === "APPLE" => true
// "oRangGE".toUpperCase() === "oRanGE" => false

// const filteredArr = array.filter((word) => word.toUpperCase() === word);
// log(filteredArr);

// const array = [
//     { id: 1, name: 'Pepsi' },
//     { id: 2, name: 'Mirinda' },
//     { id: 3, name: 'Coke' },
//     { id: 4, name: 'Fanta' },
//     { id: 5, name: 'Sprite' },
// ];

// Deleted by Array.filter
// const filterLists = array.filter((obj) => obj.id != 4);
// log(filterLists);

const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' },
];

function filterFn(personObj, index, array) {
    const month = +personObj.birth.slice(5, 7);
    if (month === 6) return true;
    else return false;
}

const filterLists = array.filter(filterFn);

log(filterLists);
