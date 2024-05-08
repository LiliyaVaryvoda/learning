// !!!!!!!!!!!!!!!!!!!!!!!!!!!! map

//let myArray = [3,5,8,55,43]
// let mappedArray = myArray.map(num => num *2)
// console.log('mappedArray', mappedArray)
// console.log('myArray', myArray)


// const myAwesomeArray = [5, 4, 3, 2, 1]
// let myAwesomeArrayChanged =  myAwesomeArray.map(x => x * x)
// console.log('myAwesomeArrayChanged', myAwesomeArrayChanged)





// !!!!!!!!!!!!!!!!!!!!!!!!!!!  filter
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   forEach
// let myArray = [3,5,8,55,43]
// let forArray = myArray.forEach(num => num*2)
// console.log('forArray', forArray)   // undefined





// !!!!!!!!!!!!!!!!!!! reduce

// // calculate the sum of all elements in array
// let myArray = [3,5,8,55,43]
// // 0 is accumulator initial value, value is the value of each element one by one, so we add 0 + value, then 0+value+value2 and so on
// let myArrayReduced = myArray.reduce((accumulator, value) => accumulator + value, 0 )
// console.log('myArrayReduced', myArrayReduced)

// // find the maximum value in array
// // here accumulator value is the first value of array; we use Math.max to take the first value, next value, then next and next2 value and so on
// let myArrayBiggest = myArray.reduce((accumulator, value) => Math.max(accumulator, value))
// console.log('myArrayBiggest', myArrayBiggest)

// // find the mimimum value in array
// // here accumulator value is the first valur in array and we use Math.min to compare first and next value, next and next2 and so on
// let myArraySmallest = myArray.reduce((accumulator, value) => Math.min(accumulator, value))
// console.log('myArraySmallest', myArraySmallest)

// // concatinate all strings in array into one string
// let myStringArray = ['Hello', ' ',  'dear', ' ', 'world', '!']
// let myStringConcat = myStringArray.reduce((accumulator, value)=> accumulator+value, "")
// console.log('myStringConcat', myStringConcat)

// // counting occurences of specific values in array
// let fruitsArray = ['banana', 'apple', 'pineapple', 'apple', 'apple', 'banana']
// let fruitsReduced = fruitsArray.reduce((accumulator, value) => {
//     accumulator[value]=(accumulator[value]||0)+1
// return accumulator
// },
// {}
// )
// console.log(fruitsReduced)

// // combine all sub arrays into one array

// let combinedArrays = [[1,2], [3,5,6], [6,7,8,9]]
// let singleArray = combinedArrays.reduce((accumulator, value)=> accumulator.concat(value), [])
// console.log('singleArray', singleArray)










// Create a third array of sums of 2 other arrays

// let myarr = [1,2,3,4]
// let myarr2 = [6,7,8,9]


// function checkSum(ar, ar2){
//     let result = []
//     for (let i = 0; i< myarr.length; i++){
//         result.push(ar[i] + ar2[i])
//     }
//     return result
// }

// console.log(checkSum(myarr, myarr2))