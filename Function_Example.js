//!!!!!!!!!!!!!!!!!!   arrow function


// const arrowFunc = (a, b) => {console.log(a+b)}

// arrowFunc(2,3)



//!!!!!!!!!!!!!!!!!!!  arrow function and this

// const lili = {
//     name : 'Lilia',
//     age: 29,
//     greetArrow : () => {
//         console.log(`my name is ${this.name}`)
//     }
// }

//undefined










//!!!!!!!!!!!!!!!!!!!!!!!!!!    callback function

// function hello (name, callback){
//     console.log(`Hello, ${name}`)
//     callback()
// }

// function goodbye(){
//     console.log('Goodbye')
// }


// hello('Lili', goodbye)










//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! rest parameter

// function calculateNumbers (...num){
//     console.log(num.length)
//     console.log(num)
// }



// calculateNumbers(4,5,3,2,4,5,6,4,3)










//!!!!!!!!!!!!!!!!!!!!!!!!!!!  default parameters

// function defaultParam(name = 'Lilia'){
//     console.log(name)
//     }

//     defaultParam()   










// function generator example

// function* idGenerator(){
//     let id = 0
//     while(true){
//         yield id++
//     }
// }

// let gen = idGenerator()
// console.log(gen.next().value) //0
// console.log(gen.next().value) //1