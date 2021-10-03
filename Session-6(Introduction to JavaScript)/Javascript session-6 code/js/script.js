// console.log()
console.log("Hello World");
//Outputs Hello World in Console

//Strings
console.log(typeof("Hilag"));     //---------->String
console.log(typeof(1));           //---------->Integer
console.log(typeof(true));        //---------->Boolean

//alert()
alert("Hello Friends");
//Alert popup window displaying message Hello Friends

//prompt()
prompt("Please enter your name:");
//Similar to alert only the popup also has a text field to imput text

//Variables
var a = prompt("Please enter your name:");
console.log(a);
//The variable "a" stores the value user enters in the prompt and acts like a container.

// Task 1- Swapping two numbers using variables
var a = 8;
var b = 5;
console.log(a);
console.log(b);
var temp=0;
temp=a;
a=b;
b=temp;
console.log(a);
console.log(b);
//Imagine the task as one containing 2 bukets-(i) Containing Sand (ii) Containing water
// We need to exchange the contents of the bucket
// So we bring another empty bucket (here temp)
// and shift the content of bucket 1 in temp---->so bucket 1 becomes empty
// now we fill bucket 1 with content of bucket 2----->so bucket 2 becomes empty
// now we transfer content of temp bucket into bucket 2

//Strings(String concatenation,slicing[slice(x,y)],string.length property)
//String concatenation
var a = "Hello";
var b = "Friends";
console.log(a + " " + b);
//Space is also considered as a character

//Slicing
var a = "Hilag";
var b = a.slice(0,2);  //------------>"Hi" will be printed as in slicing the index begins form 0 and 
                       //              we end it at n-1.So slicing is slice(0,n)=[0,n-1)
console.log(b);
//Negative slicing
var c = a.slice(-3,-1); //----------->Will output "la" from end of the string
console.log(c);
//Special Case
var d = a.slice(-1);  //------------->Will output "g" the last element of string a
console.log(d);

//Task 2- Word Counter
var a = prompt("Write some words:");
var b = a.length;
var under140 = a.slice(0,140);
alert(under140);
//It will output only 140 first words of the sentence

// toLowerCase(),toUpperCase()
var a = prompt("Enter your name");
console.log(a.toUpperCase());    //----------------->Convert to Upper Case
console.log(a.toLowerCase());    //----------------->Convert to Lower Case

//Functions
var money = 100;
var cost = 10;
var ans;
function milk()
{
    ans = money/cost;
    return ans;
}
console.log(milk());
//Function makes bigger problems into smaller parts.

// ---------------------------------END--------------------------------------------//