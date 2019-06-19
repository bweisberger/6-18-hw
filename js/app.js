//Part 1: Terms

//interpolation is using template literals to stick variables into a written statement
//concatenation is adding strings together

//interpolation:
let name = "Bill";
console.log(`Hey, ${name}`);

//concatenation
name = "Frank"
console.log("Hey, " + name);

//DRY stands for Don't Repeat Yourself
//It means any time you see yourself doing the same thing a few times
//You should write code to automate it, and call that code.
//We've learned aliases in bash, functions in JS, not sure what else.

//Declaring a variable is using a type like let or const
//to let a variable be known for the first time.
//When we define a variable, we set it equal to something (assign a value).

//We should use const for 95% of our code, and use let only in loops
//or as a counter. Let can be redefined, where const variables can't be.

//A parent directory is one that contains a child directory
//home --> Pictures (home is the parent, Pictures is the child)

//man command will give you a manual for the command, eg. man cp

//tab completion means you hit tab to save time when you're typing in
//a text editor or command line interface. For example you can start
//typing the name of a directory in a CLI and then tab to complete the
//directory.

//Part 2: Boolean expressions and operators
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c); // (a < b < c is not the answer and is not valid JS)
console.log(a * a === d); // again, the answer is not something "weird," it's an expression that makes sense
console.log(e === 'Kevin');
console.log(48 == '48');

// Part 3: While Loops

//this is an infinite loop
// while (true) {
// 	console.log('Do not run this loop');
// }

//I'm not sure if this will run infinitely or not, because there will be an error.
//attempt to redefine a constant.
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
//ran the loop - it breaks after the first console.log.
//not infinite.

//define a redefinable variable letters to point to "A"
let letters = "A";
//define a redefinable variable i to point to 0;
let i = 0;

//create a loop that runs while i is less than 20;
while (i < 20) {
  //letters will add another "A" to the end. So it becomes "AA" after one loop.
	letters += "A";
  //i will increment by 1. So after one loop i === 2;
	i++;
  //close the loop
}

//log to the console the end result of letters, which should be 21 A's
console.log(letters);

// Part 4: Loops!

//1. For loops define and increment variables within the control box,
//where while loops only set a conditional statement.

//2.
for (let i = 0; i < 1000; ++i) {
  console.log(i);
}

//3.The first component is a variable definition (let i = 0)
//The second part of the control statement is a conditional,
//or boolean expression that returns true until i is greater
//than or equal to 100.
//The third part of the control statement is an expression to
//increment i by 1 every time the loop runs.

//4.
for (let i = 999; i >= 0; --i) {
  console.log(i);
}

//5.
for (let i = 1; i <= 10; ++i) {
  console.log(`The value of i is: ${i} of 10`);
}
