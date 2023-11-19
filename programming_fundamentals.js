//************************** */ Common programming principles

// As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

// Read this article on programming principles, focus on the following nine:

// DRY - Dont repeat yourself for more concise and clear code for you/others.
// KISS - Keep It Simple Stupid, keeping it simple is quicker and easier to modify/debug.
// Avoid creating a YAGNI - Only write code that you are going to need.
// Do the simplest thing that could possibly work - Keeps us on par with keeping it simple!
// Don't make me think - Our code should be easy to read and understood by everyone.
// Write code for the maintainer - Know that in the future your code will have to be maintained and write it accordingly.
// Single responsibility principle - Single well defined task for each component of our code.
// Avoid premature optimization - Just get the code working and worry about optimization later.
// Separation of concerns -  Different areas of functionality should be managed by distinct and minimally overlapping modules of code.

// Doing the simplest thing that could possibly work doesn't surprise me but right now it seems that doing as much as possible
// is the way my brain is processing how to code when in reality the solutions can be very concise and simply written. Which is 
// the thing that surpises me and the topic that is giving me the most struggle currently.

//***************************** Commenting Code

// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = l => { // creating a function called f that accepts 'l' as a parameter
    let es = 0, p = 0, c = 1, n = 0 //declaring variables 'es', 'p', and 'n' are 0 while 'c' is 1
    while (c <= l) { // A while loop is created that runs as long as 'c' is less than or equal to 'l'
      n = c + p; // variable 'n' is now equal to 'c' plus 'p'
      [c, p] = [n, c] // variables are now c is equal to n and p is equal to c
      es += (c % 2 === 0) ? c : 0 // if c modulo 2 is true then es equals es plus c, if not then c equals 0??
    }
    return es // returns variable es
  }
  
  console.log(f(55)) // console logs and invokes our function with 55 passed as an argument.

//******************************** Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//* Any name that was actually a word describing the function would have been better than 'l'. All of the variables would have been better as words describing what they were to make the code easier to read/understand. Also breaking each line up instead of trying to squeeze things all onto one line would have made it easier to read.
// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//* f2 because it is easier for me to understand and read, therfore easier to maintain/modify.
// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//* When I remove the semi-colon the terminal throws an error "Invalid left-hand side in assignment". The semi-colon is necessary. I would find this difficult to debug since semi-colons are normally accepted syntax at the end of a line of code

