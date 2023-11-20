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
        return ('select a song')
    }
    return options()
}

console.log(powerButton())