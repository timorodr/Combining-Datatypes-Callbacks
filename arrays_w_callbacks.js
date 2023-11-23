//*************************** Section 3 Array Methods with Callbacks */


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// The first question is for the numbers array. The second question is for the words array.

// You don't have to write an answer to the thought questions.

//******* EVERY */
// Determine if every number is greater than or equal to 0

let everyZero1 = nums.every(zero => nums[zero] >= 0)
console.log(everyZero1)

// determine if every word shorter than 8 characters

let shortWords1 = panagram.every(word => word.length < 8)
console.log(shortWords1)

//******** FILTER */ 

// filter the array for numbers less than 4

const lessThanFour = nums.filter((smallNums) => {
    return smallNums < 4; 
})

console.log(lessThanFour)

// filter words that have an even length

let evenWords = panagram.filter((words) => {
    if(words.length % 2 === 0) {
        return words
    }
})
console.log(evenWords)

//******** FIND */ 
// Find the first value divisible by 5
let divisFive = nums.find((fiver) => {
    if(fiver % 5 === 0) {
        return fiver
    }
})
console.log(divisFive)

// find the first word that is longer than 5 characters

let longWord = panagram.find((bigWord) => {
    if(bigWord.length > 5) {
        return bigword
    }
})
console.log(longWord) // undefined because no word is longer than 5 characters

//******** FIND INDEX */ 

// find the index of the first number that is divisible by 3
let divisThree = nums.findIndex(three => {
    if(three % 3 === 0) {
        return three
    }
})
console.log(divisThree)

// find the index of the first word that is less than 2 characters long

let twoWord = panagram.findIndex(twoChar => {
    if(twoChar.length < 2) {
        return twoChar
    }
})
console.log(twoWord) // logs -1 because not a true statement or Undefined

//******** FOR EACH */ 

// console.log each value of the nums array multiplied by 3

nums.forEach((multThree, ind) => {
    nums[ind] = multThree * 3
    
})
console.log(nums)
// console.log each word with an exclamation point at the end of it

panagram.forEach((word, i) => {
    panagram[i] = `${word}!`
})
console.log(panagram)

//******** MAP */ 

// make a new array of each number multiplied by 100
let newArrMap = nums.map((newNums) => {
    return newNums * 100
}
  
)
console.log(newArrMap)
// make a new array of all the words in all uppercase

let newArrUpCase = panagram.map((upper) => {
    return upper.toUpperCase()
})
console.log(newArrUpCase)


//******** SOME */ 

// Find out if some numbers are divisible by 7
let someSeven = nums.some(seven =>  {
    return seven % 7 === 0
})
console.log(someSeven)

// Find out if some words have the letter a in them
let someA = panagram.some(aWord =>  {
    return aWord.includes('a')
})
console.log(someA)