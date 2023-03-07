// Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"]

// Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");
console.log(languages);

// Add ‘Java’ after ‘Ruby’
languages.splice(2, 0, "Java")
console.log(languages);

// Remove the first item in the array
languages.shift()
console.log(languages)

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift")
console.log(languages)

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
const index = languages.indexOf("PHP")
languages.splice(index, 1, "Go", "Rust")
console.log(languages)


// 4 // Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

function maxNumber(arr) {
    console.log(Math.max(...arr));   
}
let array = [1,3,4,6,9]
maxNumber(array);

// 5 // Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex(arr) {
    let sum = []
    for (i = 0; i < arr.length; i++){
        let newNum = arr[i] * 2
        sum.push(newNum)
    }
    return sum;
}
console.log(valTimesIndex(array));