//Math.random()
var a = Math.random();
console.log(a);

// Math.floor() usecase------------>Dice roll example
var n = Math.random();
n=n*6;
var ans=Math.floor(n)+1;
console.log(ans); 

// //if-else loop
var name=prompt("Please enter your name:");
if(name==="Hilag")
{
    alert("Welcome Hilag");
}
else
{
    alert("Welcome not Hilag");
}

//=== and == difference
//Case 1-=== - Cares about both datatype and value
var number="1";
if(number===1)
{
    console.log("The numbers are equal");
}
else
{
    console.log("The numbers are not equal");
}

//Case 2-== - Only cares about the value
var number1="1";
if(number==1)
{
    console.log("The number are equal");
}
else
{
    console.log("The numbers are not equal");
}

//Comparison Operators
// === -------------->is strictly equal to
// ==  -------------->is equal to
// !== -------------->is strictly not equal to
// !=  -------------->is not equal to
// >   -------------->is greater than
// <   -------------->is lesser than
// >=  -------------->is greater than equal to
// <=  -------------->is less than equal to
var num=prompt("Please enter a number:");
if(num === "1")
{
    alert("You entered 1");
}
else if(num <= 10)
{
    alert("You have entered a number less than 11");
}
else
{
    alert("You entered" + num + "number");
}

//Comparators 
//&&  -------------->AND
//||  -------------->OR
var num=prompt("Please enter a number:");
if(num === "1")
{
    alert("You entered 1");
}
if(num <= 10 && num > 1)
{
    alert("You have entered a number from 2 to 10");
}
else
{
    alert(" You entered " + num + " number ");
}

//Task 1 - Calculate Leap Year
//A year is a leap year if it is divisible by 4 and not divisible by 100 or divisible by 4 and 400.

//Solution-
function leap(year)
{
    if(year % 4 === 0 && year % 100 != 0)
    {
        console.log("It is a leap year");
    }
    if(year % 4 === 0 && year % 400 === 0)
    {
        console.log("It is a leap year");
    }
    else
    {
        console.log("It is not a leap year");
    }
}
leap(2000); //It is a leap year
leap(1000); //It is not a leap year

//JavaScript Collections
var myname = prompt("What is your name?");
var names=["Hilag","Hrithik","Rishabh","Prachi","Amisha","Durgesh"  ];
console.log(names);       //The entire array is printed out
console.log(names.length); //The length of the array is printed out
console.log(names[1]);    //The array item with index 1 is printed(here,Hrithik)
console.log(names.includes("Rishabh"));//Outputs a boolean value
console.log(names.includes(myname));//Outputs a boolean value

//Array.push()
var arr1=["Hilag","Hrithik","Rishabh","Prachi","Amisha","Durgesh"];
arr1.push("xyz");
console.log(arr1);

//Array.pop()
var arr1=["Hilag","Hrithik","Rishabh","Prachi","Amisha","Durgesh","xyz"];
arr1.pop();
console.log(arr1);

//Task 2 - Who Buys Lunch?
// A random person is selected from the array to pay for lunch

function pays()
{
    var pname=["Hilag","Hrithik","Rishabh","Prachi","Amisha","Durgesh"];
    var pnumber = pname.length;
    var random = Math.random()*pnumber;
    pnumber= Math.floor(random);
    var payee=(pname[pnumber]);
    return payee;
}
console.log(pays() + " is going to pay for the party ");

//While loop
var i=1;
while(i<=10)
{
    console.log(i);
    i++;
}
//Prints 1 to 10

//For loop
var i=1;
for(i=1;i<11;i++)
{
    console.log(i);
}
//Prints 1 to 10;

//Final Task - Printing the Fibonacci series
function fib(n)
{
    var output = [];
    if(n==1)
    {
        output=[0];
    }
    else if(n == 2)
    {
        output=[0,1];
    }
    else
    {
        output=[0,1];
        for(var i=2;i<n;i++)
        {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
console.log(fib(5));  //Outputs first 5 elements of fibonacci series
console.log(fib(2));  //Outputs first 2 elements of fibonacci series  