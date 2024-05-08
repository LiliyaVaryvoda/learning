// !!!!!!!!!!!!!!  Find the two smallest numbers in the array ‘arr’. The array ‘arr’ should be left unchanged. Output result in the console.


// function findTwoSmallest(arr){
//     // create a copy of array to not mutate the original one as it is passed by reference
//     let sortedArray = [...arr]
//     // use sort() method to sort new array with callback arrow function to compare prev and next value in array
//     sortedArray.sort((a, b) => a-b)
//     // return two smallest values from new array
//     return [sortedArray[0], sortedArray[1]]
// }

// let originalArray = [5, 4, 7, 2, 10, 1];
// console.log(findTwoSmallest(originalArray))
// console.log(originalArray)










// !!!!!!!!!!!!!!!!!!!  Find the two biggest numbers in the array ‘arr’. The array ‘arr’ should be left unchanged. Output result in the console.

// function findTwoBiggestNumber(arr){
//     // create a shallow copy to not mutate original array as it passed by reference
//     let mutatedArray = [...arr]
//     // use sort method to sort new array with callback function to compare next and prev value
//     mutatedArray.sort((a, b) => b-a)
//     return [mutatedArray[0], mutatedArray[1]]
// }


// let originalArray = [5, 4, 7, 2, 10, 1];
// console.log(findTwoBiggestNumber(originalArray))
// console.log(originalArray)









// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Check if the string is pallindrome

// function pall(text){
//     const text2 = text.split('').reverse().join('')
//     console.log(text2)
//     if(text == text2){
//         console.log('true')
//     }
//     else{
//         console.log('false')
//     }
// }

// pall('abba')











// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Write a JS function that calculates the factorial of a given number. Test cases can include positive integers, zero and negative integers
// factorial is 5! = 1*2*3*4*5


// function calcFact(num){
//     if (num<0){
//         return false
//     }
//     else if (num == 0){
//         return 0
//     }
//     else if (num == 1){
//         return 1
//     }
//     return num*calcFact(num-1)
// }

// console.log(calcFact(10))










//!!!!!!!!!!!!!!!!! Write js function that checks whether given number is a prime (can be divided on 1 and itself) Tests can include prime numbers, composite numbers, 0 and negative
// function primeNumbers(num){
//     if (num<2){
//         return false
//     }
// take number square number and divide it on all lover numbers from 2 till this square number and if 1 result, 1 reminder is 0, it means that its divided fully and its not prime
//     for (let i = 2 ; i <= Math.sqrt(num); i ++){
//         if (num % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(primeNumbers(61))










//!!!!!!!!!!!!!!!!!!!!! Find maximum sub array sum (sum of all elements of array)
// let array1 = [2 , 2, 1, 5, 4]
// let updatedArray = [...array1]
// let arr = updatedArray.reduce((accumulator, value) => accumulator+value)
// console.log('arr', arr)
// console.log('array1', array1)










// !!!!!!!!!!!!!!!!!!!!!!  Remove duplicates from array

// let arrayWithDub = [2, 5, 4, 2, 4,2,4,7,8,4,2,9]
// spead operator will make set an array
// let mySet = [...new Set (arrayWithDub)]
// console.log('my set', mySet)










// return fibonacchi numbers sequence up to some number

// function myFibonacchi(num){
//     const fibonacchiSequesnce = []
//     let firstNum = 0
//     let secondNum = 1
//     for(let i = 0; i< num; i++){
//         fibonacchiSequesnce.push(firstNum)
//         let next = firstNum + secondNum
//         firstNum = secondNum
//         secondNum = next
//     }
//     return fibonacchiSequesnce
// }


// console.log(myFibonacchi(10))










// !!!!!!!!!!!!!!!!!!!!!!  Return particular fibonacchi number

// function particularFibonacchi(n){
//     if (n<=1){
//         return n
//     }
//     return (particularFibonacchi(n-1)) + (particularFibonacchi(n-2))
// }

// console.log(particularFibonacchi(7))










// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  WHAT WILL BE EXECUTED FIRST
// console.log('1')
// console.log('2')



// setTimeout(()=>
// {
//     console.log('Timeout 1')
// }
// , 10
// )




// const fetchData = new Promise ((resolve, reject)=>{
//     const data = Math.random() > 1 ? 'Success' : 'Failed'
//     if (data == 'Success'){
//         resolve(data)
//     }
//     else{
//         reject('Filed to fetch')
//     }
// })


// fetchData.then((data) => {
//     console.log('Data fetched')
// })
// .catch((error) => {
//     console.error('Error', error)
// })










// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Sort array of objects by property

// let arrayOfObjects = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 32 },
//     { name: 'Helga', age: 35 },
//     { name: 'Helen', age: 18 }
// ]

// arrayOfObjects.sort((a,b)=> a.age - b.age)
// console.log(arrayOfObjects)
// arrayOfObjects.sort((a,b)=> a['name'].localeCompare(b['name']))
// console.log(arrayOfObjects)










//!!!!!!!!!!!!!!!!!!!!!!!! Create an object representing a user profile with properties and implement methods to update and retrieve info

// let userProfile = {
//     name: '',
//     email: '',
//     age: 0,
//     address: '',
//     updateInfo (name, email, age, address) {
//         this.name = name,
//             this.email = email,
//             this.age = age,
//             this.address = address
//     },
//     retrieveInfo () {
//         return {
//             name: this.name,
//             email: this.email,
//             age: this.age,
//             address: this.address
//         }
//     }
// }


// userProfile.updateInfo('Olena', 'olena.gmail.com', 30, 'Lviv')
// let studentOlena = userProfile.retrieveInfo()
// console.log(studentOlena)










// What will this object be consoled?

// const obj = {
//     a:'one',
//     b:'two',
//     a:'three'
// }

// console.log(obj)
// a property will be rewritten, but the position will remain
//{ a: 'three', b: 'two' }










// What will this code console?

// let [a] = [123 + [1]]
// let [b] = "123"

// console.log('a', a)
// console.log('b', b)

// this is destructuring
// a case: array [1] + string/number 123, it will change array to string, so it will be 123 + '1' and number + string will be string
// b case : if we destruct a string using array pattern, it will treat a string like an array-like object with elements "1", "2" and "3"

//a 1231
//b 1










// What this code will console


// function A(){}
// A.prototype.n = 1

// let b = new A()

// A.prototype = {
//     n:2,
//     m:3
// }


// let c = new A()

// console.log(b.n)
// console.log(b.m)
// console.log(c.n)
// console.log(c.m)


// we define function A which serves as constructor function which can be used for creating new objects
// we add property n to the prototype object of A
// this means that all instances created using A constructor will inherit this property
// we create object b using A constructor function and this object will inherit the properties defined in prototype object of A
// we reassign the prototype object of A to a new object with properties n and m
// we create another new object c using A constructor function
// Since the prototype object of A has been reassigned, c will inherit the properties from new prototype object
// changing prototype property of constructor function affects only objects created after the change

//1
//undefined
//2
//3










// What this code will return ?

// function Person(name){
//     this.name = name
//     this.sayHello = function(){
//         return 'Hello ' + this.name
//     }
// }

// Person.prototype.sayHello = function(){
//     return 'Hello ' + this.name
// }

// let jon = new Person('Jon')
// let helloFunc= jon.sayHello

// console.log(helloFunc())

// it will return hello undefined
// because it is assignment a function to a variable: let helloFunc= jon.sayHello
// it is a new reference now
// how to fix this?
// add bind
//let helloFunc= jon.sayHello.bind(jon)











// What this code will return?

// let numbers = [1,2,3,4,5]
// let result = numbers.map(function(num, index, arr) {
//     if(index<arr.length-1){
//         console.log(num + arr[index+1])
//         return num + arr[index+1]
//     } else{
//         return num
//     }
// })


// console.log(result)
// [ 3, 5, 7, 9, 5 ]

// num - 1,2,3,4,5
// index - 0,1,2,3,4
// arr - [1,2,3,4,5]










// what this code will return?

// let x = 1

// function foo(){
//     console.log(x)
//     let x=2
// }


// foo()

// reference error : cannot access x before initialization










// reversed string with for of loop

// function reversedLetter (str) { 
//     let revstr = ''
//     for (let letter of str){
//         revstr  = letter + revstr
//         console.log(revstr)
//     }

//     return revstr
// }



// let original = 'hello'
// let rev = reversedLetter(original)
// console.log(rev)










// WHat will return this code

// function fool(){
//     let a = b = 0
//     a++
//     return a
// }

// fool()

// console.log(typeof a)
// console.log(typeof b)


// let a = 0, then a = 1, but a is inside the function, so, its not accessible outside the function
// it will be reference error if just console.log(a)
// but console.log(typeof a) will return just undefined (because a exists already)
// and b = 0 makes b a global variable
//undefined
//number










// what will be the result of this code?
// console.log(10/0)
// Infinity
// console.log(0/0)
// NaN











// Find first non repetive character in string
// let myString = 'kkkdddddjfjhrjspafrjrrrr'

// function findFirstNonRepetive(str){
    // create empty object
//     let charCount = {}
// for of loop string and make every letter a key of object and give a value of 1
//     for (let char of str){
//         charCount[char] = (charCount[char]||0)+1
//     }
// another for of loop for string and check if object key(letter)  value is 1 , if 1 return this letter
//     for (let char of str){
//         if (charCount[char] === 1){
//             return char
//         }
//     }
// return false when none have value 1, that means they have 2 or more occurences
//     return false
// }


// console.log(findFirstNonRepetive(mystr))