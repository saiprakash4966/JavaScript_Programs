function message()         //function definition
{
    console.log("Hi all")
}

message();       //function call

/**
 * Return a value in function
 */

function message2()
{
    return "Hello World"
}

let str = message2();
console.log(str);

/**
 * Passing parameter in function
 */

function message3(user)
{
    return `Hello ${user}`;
}

let user='Saiprakash';
let str1= message3(user);
console.log(str1);
