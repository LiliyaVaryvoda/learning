//!!!!!!!!!!!!!!!!!!!!!!!!!!!!   CLASS 1
// class People {
//     constructor(namePerson, age, job, grades){
//         this.namePerson = namePerson
//         this.age = age
//         this.job = job
//         this.grades = grades
//     }
//     ifTalented(){
//         if(this.grades.map(grade=>grade>=90)){
//             console.log('true')
//             return true
//         }
//         else{
//             console.log('false')
//             return false
//         }
//     }
// }


// let studentsAll = [
//     {name:'Ava', age:25, job:'teacher', grades:[90]},
//     {name:'Jess', age:30, job:'doctor', grades:[88]}
// ]

// let newPerson = new People ('Ava', 25, 'teacher', [91, 99, 89])
// newPerson.ifTalented()










//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  CLASS 2
// class Animal{
//     constructor(name, breed, age){
//         this.name = name
//         this.breed = breed
//         this.age = age
//     }
//     makingSound(sound){
//         console.log(sound=='gr'? 'dog is barcing' : 'cat is maywling')
//     }
// }

// let tiger = new Animal ('LuckyTiger', 'kitten', 1)
// tiger.makingSound('mr')










//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   CLASS 3 INHERITANCE
// class Car {
//     constructor(model, year){
//         this.model = model
//         this.year = year
//     }
//     description(){
//         console.log(`My car is ${this.model} and ${this.year}`)
//     }
// }

// const myCar = new Car('Volvo', 1996)
// myCar.description()



// class Bicycle extends Car {
//     constructor(model, year, color){
//         super(model, year)
//         this.color = color
//     }

//     describe(){
//         console.log(`my bicycle is ${this.model} and ${this.year} and ${this.color}`)
//     }
// }


// const mybicycle = new Bicycle('toyota', 1994, 'yellow')
// mybicycle.describe()










// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  CLASS 4 STATIC METHOD
// class DemoClass {
//     constructor(){}
//     static move(){
//         console.log('Moving')
//     }
// }

// const dem = new DemoClass()
// DemoClass.move()