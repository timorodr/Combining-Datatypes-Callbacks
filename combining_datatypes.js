//******************************** Section 2 Combining Datatypes




// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    crayonArr: ['black', 'purple', 'yellow', 'blue', 'red']
}

console.log(crayonBox.crayonArr[0])

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
    cap: {material: 'metal', color: 'blue'}
}

console.log(bottle.cap.material)

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [
    {name: 'Model X', price: 50000},
    {name: 'TRX', price: 90000}
]

console.log(receipt[0].name)

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [
    ['Tim', 'Javi', 'Alex', 'Wyatt', 'Nick', 'Raul', 'Cristian']
]

console.log(apartmentBuilding[0][0])




//******************************* Combine objects, arrays, and functions more than one level deep */




//Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

function knit() {
    return {item: 'scarf', size: '6ft'}
}

console.log(knit().item)

//Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

function crayonSelector() {
    return crayonBox.crayonArr[1]
}

console.log(crayonSelector())

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

function powerButton() {
        function options() {
        return('select a song')
    }
    return options()
}

console.log(powerButton())

// Model a Vending Machine Model a vending machine

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack


// An object with an array of snacks is created.
// In the array we have 3 elements that are objects with name of snack and price of snack
// a property called vend with a function that accepts a number as an argument is created
// if statements from 0 - 2 are created that console log the vending machine snack name depending on the argument passed in
// .vend()
// If a number 0-2 is not passed in as an argument the terminal logs not a valid entry and no snacks are returned
const vendingMachine = {
    snacks: [
        {name:'chips', price: 5}, 
        {name:'chocolate', price: 3},
        {name:'coke zero', price: 2},  
    ],
    vend: function (number) {
        if(number === 0) {
            console.log(vendingMachine.snacks[0].name)
        } else if(number === 1) {
            console.log(vendingMachine.snacks[1].name)
        } else if(number === 2) {
            console.log(vendingMachine.snacks[2].name)
        }else {
        console.log('Not a valid entry, please select a number 0 - 2')
        }
    }
}
// console.log(vendingMachine.snacks[0])

vendingMachine.vend(2)

//******************************* CALLBACKS */