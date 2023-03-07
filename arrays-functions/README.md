1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

Mutation array methods change the state of the original array while non-mutation array methods do not change the original array
Types of Mutation Array Methods
a. array.splice()
b. array.shift()
c. array.push()
d. array.unshift()
e. array.pop()

Types of Non-mutation Array Methods
a. concat()
b. spread operator
c. filter()
d. slice()
e. map()



3. What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

answer: fruit = ['apple', 'mango', 'orange']



Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]


