// assignment 2:

// CHAPTER 5 - MATH EXPRESSIONS

// question 1
// Write a program that take two numbers & add them in a
// // new variable. Show the result in your browser.
// answer: var addedNum = 3 + 5;
// document.write("The sum of 3 and 5 is " + addedNum);

// question 2
// Repeat task1 for subtraction, multiplication, division &
// modulus.
// answer: (for subtraction)
// var subtractedNum = 3 - 5;
// document.write("The subtraction of 3 and 5 is " + subtractedNum);
// (for multiplication)
// var multipliedNum = 3 * 5;
// document.write("The multiplication of 3 and 5 is " + multipliedNum);
// (for division)
// var dividedNum = 3 / 5;
// document.write("The division of 3 and 5 is " + dividedNum);
// (for modulus)
// var modulusNum = 3 % 5;
// document.write("The modulus of 3 and 5 is " + modulusNum);

// question 3
// Do the following using JS Mathematic Expressions
// a.Declare a variable.
//     b.Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c.Initialize the variable with some number.
//     d.Show the value of variable in your browser like “Initial
// value: 5”.
// e.Increment the variable.
//     f.Show the value of variable in your browser like “Value
// after increment is: 6”.
// g.Add 7 to the variable.
//     h.Show the value of variable in your browser like “Valueafter addition is: 13”.
// i.Decrement the variable.
//     j.Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k.Show the remainder after dividing the variable’s value
// by 3.
// l.Output : “The remainder is: 0”.
// answer: (part: a)
// var num;
// (part: b)
// num = "??"
// document.write("Value after variable declaration is " + num);
// (part:c)
// num = 5;
// (part: d)
// document.write("<br />")
// document.write("Initial value: " + num);
// (part: e)
// num = num + 1;
// (part: f)
// document.write("<br />")
// document.write("Value after increment is: " + num);
// (part: g)
// num = num + 7;
// (part: h)
// document.write("<br />")
// document.write("Value after addition is: " + num);
// (part: i)
// num = num - 1;
// (part: j)
// document.write("<br />")
// document.write("Value after decrement is: " + num);
// (part: k)
// num = num % 3;
// (part: l)
// document.write("<br />")
// document.write("The remainder is: " + num);

// question 4
// Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie.
// answer: var ticketPrice = 600;
// ticketPrice = 600 * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice + "PKR");

// question 5
// answer: document.write("table of 4");
// document.write("<br />");
// document.write("4 x 1 = 4");
// document.write("<br />");
// document.write("4 x 2 = 8");
// document.write("<br />");
// document.write("4 x 3 = 12");
// document.write("<br />");
// document.write("4 x 4 = 16");
// document.write("<br />");
// document.write("4 x 5 = 20");
// document.write("<br />");
// document.write("4 x 6 = 24");
// document.write("<br />");
// document.write("4 x 7 = 28");
// document.write("<br />");
// document.write("4 x 8 = 32");
// document.write("<br />");
// document.write("4 x 9 = 36");
// document.write("<br />");
// document.write("4 x 10 = 40");

// question 6
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// answer: (part: a)
// var celTemp = "40°C";
// (part: b)
// celTemp = (°F - 32) x 5 / 9
// celTemp = 104°F
// document.write(celTemp + " is 104°F");
// (part: c)
// var fahTemp = "40°F";
// (part: d)
// fahTemp = (°C x 9 / 5) + 32;
// fahTemp = 4.4°C
// document.write("<br />");
// document.write(fahTemp + " is 4.4°C");

// question 7
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// answer: (part: a)
// document.write("<h1>Shopping Cart</h1>")
// var item1 = 650;
// document.write("Price of item 1 is " + item1);
// (part: c)
// document.write("<br />");
// document.write("Quantity of item 1 is 3");
// (part: b)
// var item2 = 100;
// document.write("<br />");
// document.write("Price of item 2 is " + item2);
// (part: d)
// document.write("<br />");
// document.write("Quantity of item 2 is 7");
// (part: e)
// var shipCharge = 100;
// document.write("<br />");
// document.write("Shipping charges " + shipCharge)
// var totalCost = (item1*3) + (item2*7) + 100;
// document.write("<br />");
// document.write("<br />");
// document.write("Total cost of your order is " + totalCost);

// question 8
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// answer:
// document.write("<h1>Mark Sheet</h1>");
// var studentMarks = 804;
// var totalMarks = 980;
// document.write("Total marks: " + totalMarks);
// document.write("<br />");
// document.write("Marks obtained: " + studentMarks);
// document.write("<br />");
// var percent = (studentMarks * 100 / totalMarks + "%");
// document.write("percentage: " + percent );

// question 9
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
// answer:
// document.write("<h1>Currency in PKR</h1>")
// 1 US dollar = 104.80 Pakistani Rupee
// var $toPkr = 104.80 * 10;
//1 Saudi Riyal = 28 Pakistani Rupee
// var riyalToPkr = 28 * 25;
// var total = $toPkr + riyalToPkr;
// document.write("Total currency in PKR: " + total);

// question 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// answer: var num = 10;
// (part: a)
// num = num + 5;
// (part: b)
// num = num * 10;
// (part: c)
// num = num / 2;

// question 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
// answer:
// document.write("<h1>Age Calculator</h1>")
// (part: a)
// var currentYear = 2025;
// (part: b)
// var birthYear = 2006;
// (part: c)
// var age = currentYear - birthYear;
// document.write("Current Year: " + currentYear);
// document.write("<br />");
// document.write("Birth Year: " + birthYear);
// document.write("<br />");
// document.write("your age is: " + age);

// question 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// answer:
// document.write("<h1>The Geometrizer</h1>")
// (part: a)
// var radius = 20;
// document.write("Radius of a circle: " + "20")
// document.write("<br />");
// (part: b)
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// document.write("The circumference is " + circumference);
// (part: c)
// document.write("<br />");
// var area = pi * radius * radius;
// document.write("The area is: " + area);

// question 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
// answer:
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// (part: a)
// var favSnack = "lava cake";
// document.write("Favourite Snack: " + favSnack);
// document.write("<br />");
// (part: b)
// var age = 19;
// document.write("Current age: " + age);
// document.write("<br />");
// (part: c)
// var maxAge = "50";
// document.write("Maximum Age: " + maxAge);
// document.write("<br />");
// (part: d)
// var snackPerDay = "2";
// document.write("Amount of snacks per day: " + snackPerDay);
// document.write("<br />");
// (part: e)
// var remainingAge = maxAge - age;
// var days = remainingAge * 365;
// var snackDays = snackPerDay * days;
// document.write("you will need " + snackDays + " " + favSnack + " to last you until the ripe old age of " + maxAge); 

// CHAPTER 6-9 - MATH EXPRESSIONS

// question 1
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// answer:
// document.write("Result:");
// document.write("<br />");
// var value = 10;
// document.write("The value of a is: " + value);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of ++a is: " + ++value);
// document.write("<br />");
// document.write("Now the value of a is: " + value);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of a++ is: " + value++);
// document.write("<br />");
// document.write("Now the value of a is : " + value);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of a-- is : " + value--);
// document.write("<br />");
// document.write("Now the value of a is: " + value);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of --a is: " + --value);
// document.write("<br />");
// document.write("Now the value of a is: " + value);

// question 2
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// answer:
// --a =  1;
// --a - --b = 1 - 0 = 1;
// --a - --b + ++b = 1 + 1 = 2;
// --a - --b + ++b + b-- = 2 + 1 = 3;
// document.write("a is 2");
// document.write("<br />");
// document.write("b is 1");
// document.write("<br />");
// document.write("result is 3");

// question 3
// Write a program that takes input a name from user &
// greet the user.
// answer: 
// prompt("hello user! what's your name?");

// question 4
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
answer: 
prompt("enter any number");
document.write()

