// var string = "Welcome to this Javascript Guide!";
// let strArr = string.split(' ')
// let reversedArr = []
// strArr.map(res => {
//     reversedArr.push(res.split('').reverse().join(''))
// })
// console.log(reversedArr)

let findVowels = str => {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelArr = []
    for (let i of str) {
        if (vowels.includes(i)) {
            vowelArr.push(i)
        }
    }
    return vowelArr;
}
console.log(findVowels("vivek"));