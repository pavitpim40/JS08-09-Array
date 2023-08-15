// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

// FN : (arr) => newArr

function clone(arr) {
    // const newArr = arr.slice()
    // return newArr
    return arr.slice();
}

const a = clone([1, 2, 3, 4]);
console.log(a);
a.push(5);
console.log(a);
