// Variables For Numbers
Q1: var age;
age = "I am 15 years old";
alert(age);

Q2: var visitCount = localStorage.getItem("visitCount");
if (visitCount === null) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem("visitCount", visitCount);
alert("You have visited this site " + visitCount + " times.");

Q3: var birthyear;
birthyear = "My birth year is 1990";
var datatype;
datatype = "Data type of my declared variable is number";
document.writeln(
  "My birth year is 1990.<br>Data type of my declared variable is number.<br>"
);

Q4: var visitorname = prompt("Enter your name");
var producttitle = prompt("Enter the product title (e.g., T-shirt):");
var quantity = prompt("Enter quantity");
document.writeln(
  visitorname +
    " ordered " +
    quantity +
    " " +
    producttitle +
    "(s) www.xyclothing.com"
);
