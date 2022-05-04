// const firstName = 'Anton'
// let age = 21
// const isProgrammer = true
// const _ = 'private'
// const $ = 'some value'
// const if = 'mkef'
// const 5xqx = '5sxg'
// alert('Person name: ' + firstName + ', and he(she) is ' + age.toString() + ' years old')
// const lastName = prompt ('Enter last name')
// alert(firstName + ' ' + lastName)

// let currentYear = 2021
// const birthYear= 2000
// const age = currentYear - birthYear

// const a = 5
// const b = 9

// let c = 10
// c = c + a
// c += a

// console.log(a -b)
// console.log(a+b)
// console.log(a/b)
// console.log(a*b)
// console.log(a**b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// const isProgrammer = true
// const firstName = 'Anton'
// const age = 21
// let x
// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// const fullAge = 21
// const birthYear = 2000
// const currentYear = 2021

//  < > >= <=

// const isFullAge = (currentYear - birthYear) >= fullAge // 21 >= 22 true
// console.log(isFullAge)

// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('The course is ready')
// } else if (courseStatus === 'pending') {
//     console.log('The course is not ready')
// } else {
//     console.log('The course is failed')
// }

// const isReady = false

// if (isReady === true) {
//     console.log('All is ready')
// } else if (isReady === false) {
//     console.log('All is not ready')
// }

// isReady ? console.log('All is ready') : console.log('All is not ready')

// const num1 = 42
// const num2 = '42'

// console.log(num1 === num2)


// function calculateAge(year){
//     return 2021 - year
// }

// // console.log(calculateAge(2000))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Person : ' + name + ', '  + 'years: ' + age )
//     } else {
//         console.log('This is a future')
//     }
// }

// logInfoAbout('Anton', 2000)
// logInfoAbout('Anton', 1999)
// logInfoAbout('Anton', 2022)
// const cars = ['Mazda', 'Mers', 'Vog']
// // const cars = new Array('Mazda', 'Merc', 'Vog')
// console.log(cars.length)
// console.log(cars)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[3])

// cars[0]= 'Porchse'
// cars[cars.length]= 'Mitsu'
// console.log(cars)


// const cars = ['Mazda', 'Mers', 'Vog', 'Porche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
// console.log(car)
// }

// for (let car of cars){
//     console.log(car)
// }


const person = {
    firstName: 'Ant',
    lastName: 'Boz',
    year: 2000,
    languages: ['Ua', 'Ru', 'En'],
    hasWife: false,
    greet: function(){
        console.log('greet')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()


