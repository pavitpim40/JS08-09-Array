// - ให้เขียนฟังก์ชัน squareArr(arr)
// เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

// ```js
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// ```

// squareArr
// (array) => original Array (modified)
// (array) => new Array

const arr = [2, 3, 5, 7, 11]; // len = 5

function squareArr(array) {
    // Start Reuse Logic
    const newArr = []; // len = 5
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] ** 2);
    }
    // console.log(newArr)
    return newArr;
    // End Reuse Logic
}

let newArray = squareArr(arr);

console.log(newArray);
console.log(arr);
