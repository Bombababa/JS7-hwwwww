let numbers = [1, 2, 3];
numbers[1] = 10; 
console.log(numbers); 


let strings = ["Hello", "World", "JavaScript"];
strings.push("New String"); 
console.log(strings); 


let numbersArray = [1, 2, 3, 4, 5];
let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 


let fiveNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}


let stringArray = ["short", "medium", "this is long", "tiny", "longer than five"];
for (let str of stringArray) {
    if (str.length > 5) {
        console.log(str);
    }
}


let tenNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let maxNumber = Math.max(...tenNumbers);
console.log(maxNumber); 



let anotherTenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of anotherTenNumbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
