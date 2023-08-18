const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

// alphabets.map()

const resultArr = [];
// for(let index in alphabets) {
//   if(alphabets[index] === 'a') resultArr.push(+index)
// }

// alphabets.forEach((char,index)=> {
//   if(char === 'a') resultArr.push(+index)
// })

const foundedIndex = alphabets.findIndex((item, index) => {
    if (item === 'a') {
        resultArr.push(index);
        return true;
    }
});
foundedIndex;

resultArr;
