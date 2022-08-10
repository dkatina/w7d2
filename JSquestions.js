//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let key in person3){
    console.log('===============')
    console.log('    '+key)
    console.log('===============')
    if (person3[key] instanceof Array){
        for (item of person3[key]){
            if (item instanceof Array ){
                for (food of item){
                    console.log(food)
                }
            }else if (item instanceof Object){
                for (foodkey in item){
                    console.group(item[foodkey])
                }
            }else{
                console.log(item)
            }
        }
    }else{
        console.log(person3[key])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(firstName, age){
    this.firstName=firstName
    this.age=age
    }
    printInfo(){
        console.log(`My name is ${this.firstName}, and I'm ${this.age} years old.`)
    }
    addAge(){
        this.age+=1
        console.log("Wow I'm already a year older, time sure does fly")
    }
    
}

dylan = new Person('Dylan', 23)
grace = new Person('Grace', 23)

dylan.printInfo()
grace.printInfo()
dylan.addAge()
dylan.addAge()
dylan.addAge()
dylan.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function sizeUp(string){  
    return new Promise((resolve, reject) =>{
        if (string.length >= 10){
            resolve('Big Word')
        }else{
            resolve('Small number')
        }
    })
}

sizeUp('gigantagigas').then(
    (result)=>{console.log(result)}
    ).catch(
        (error)=>{
            console.log(error)
        }
    )

sizeUp('puny').then(
    (result)=>{console.log(result)}
    ).catch(
        (error)=>{
            console.log(error)
        }
    )