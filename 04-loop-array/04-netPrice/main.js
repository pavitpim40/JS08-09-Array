// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

// ```js
// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 }
// ];

// const summary = [
//   { netPrice: 900 },
//   { netPrice: 475 },
//   { netPrice: 100 }
// ];

// ```

const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];
// sales = [ obj1, obj2, obj3]

const newArr = [];
// //#1st Layer :  WalkThrough Array (loop)
// for (let productObj of sales) {
//     // each item = Object
//     // #2nd Layer
//     // access Object => dot, bracket
//     // Logic
//     let price = productObj.price;
//     let discount = productObj.discount;
//     let netPrice = price;
//     if (discount) {
//         netPrice = price * (1 - discount);
//     }
//     // Create new Array and Object
//     const newObj = { netPrice: netPrice };
//     newArr.push(newObj);
//     // console.log(newObj);
// }
// console.log(newArr);
// console.log(sales);

// const newArr = [];

// obj = { price: 1000, discount: 0.1 }
// sales.forEach((obj) => {
//     // calc NetPrice
//     let netPrice = obj.price * (1 - (obj.discount || 0));
//     newArr.push({ netPrice });
// });

// sales = [{price: ___ , discount: ___},{},{}]

sales.forEach((obj) => newArr.push({ newPrice: obj.price * (1 - (obj.discount || 0)) }));

console.log(sales);
console.log(newArr);
