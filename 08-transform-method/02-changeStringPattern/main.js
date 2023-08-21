// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated
// เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

const str = 'background-color-white';

const arr = str.split('-'); // ["background","color"]

let result = '';
arr.forEach((word, index) => {
    if (index == 0) {
        result += word;
    } else {
        result += word[0].toUpperCase() + word.slice(1);
    }
});

result;

// const arr1 = str.split("-")
// arr1

function camelCase(string) {
    stringArray = string.split('-');
    result = stringArray.reduce((acc, item) => {
        capletter = item[0].toUpperCase();
        subArray = item.split('');
        subArray.splice(0, 1, capletter);
        newString = subArray.join('');
        acc += newString;
        return acc;
    }, '');
    return result;
}

camelCase(str);
