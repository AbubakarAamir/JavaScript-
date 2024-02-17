                              
// Submitted by:Abubakar-Aamir                               
//  Date: 18-2-2024                             
// Assignment of javascript: 4                            
                              
                              
                              
                              
                              
                              //Assignment number 4:

// alert("hello everyone kaise ho ap log")

        //QUESTION # 1:

// var palindrome = prompt("Enter a palindrome");
// if(palindrome.toLowerCase()==="mom"){
//     alert("COrrect this is a palindrome");
// }
// else if(palindrome .toLowerCase()==="civic"){
//     alert("correct this is palindrome ");
// }
// else if(palindrome.toLowerCase()==="refer"){
//     alert("correct this is a palindrome");
// }

// else if(palindrome.toLowerCase()==="radar"){
//     alert("correct this is a palindrome")
// }
// else if(palindrome.toLowerCase()==="dad"){
//     alert("correct this is a palindrome")
// }
// else if (palindrome.toLowerCase()==="annna"){
//     alert("correct this is a palindrome")
// }

// else {
//     alert("this is not a plaindrome");
// }


//      function palin (){
//         var palindrome = prompt("Enter any palindrome word (mom,dad,level,civic,anna,radar)");
//         if(palindrome.toLowerCase()==="mom"|| palindrome.toLowerCase()==="dad"|| palindrome .toLowerCase()==="level"||palindrome.toLowerCase()==="civic"|| palindrome.toLowerCase()==="anna"||palindrome.toLowerCase()==="radar")
     
//     {
// console.log(palindrome + "  you are right this is palindrome");
//     } else {
//         console.log(palindrome + "  sorry wrong anwer this is not a palindrome");}
    
//      }
    
//     palin()



                            // QUESTION # 2:
//step a:
// var correctPassword = "Grey1020";

// // Step b: Ask the user to enter his/her password
// var userPassword = prompt("Enter your password:");

// // Step c: Validate the two passwords
// if (!userPassword ) {
//     // i. Check if the user has entered a password
//     alert("Please enter your password");
// } else if (userPassword  === correctPassword) {
//     // ii. Check if both passwords are the same
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password");
// }

//                        //QUESTION # 3:

// var greeting;
// var hour = 15;

// if (hour < 18) {
//   greeting ( "Good day");
// } else {
//   greeting(  "Good evening");
// }
//console.log(greeting);



//                //Question number 4:

//                //Part(a):
//                var studentnames = [];
//                //Part(b):
//                var studentnames = new Array();
//                //Part(c):
//                var stringarray = ["abubakar","Aamir","Haider","Hammad"];
//                //Part(d):
//                varnumberarray = ["150","200","250","400","1000"];
//                //Part(e):
//                var boolenarray = [true,false];
//                //Part(f):
//                var mixedarray = ["abubakar","10","mango"];
//                //Part(g):
//                var qualifications = ["SSC","MS","M.PHILL","PHD","BCOM","BCS","BS","MS","HSC"];



//QUESTION #4
 
    //part (1):

const colorArray = ["red","pink","yellow","purple","orange","black"];
console.log("Initial arrays of colors: ",colorArray);
 
    //part (2):
// const newColorStart = prompt("Enter any color which you want to add in the beginning:");
// colorArray.unshift(newColorStart);
// console.log("Updated array ( see your first color in the beginning):", colorArray);

//.unshift() method in arrays is used to add value in the beginning:


  //part (3):

// const newColorEnd = prompt("Enter eny color which you want to add in the ending:");
// colorArray.push(newColorEnd);
// console.log("Updated array (added to end):",colorArray);

//.push() method in arrays is used to add value in the end:

//part (4):

// colorArray.unshift("purple", "red");
// console.log("Updated array (added two colors to beginning):", colorArray);

//.unshift() method in arrays is used to add value in the beginning:


//part(5):

// colorArray.shift();
// console.log("Updated array (removed first color):", colorArray);

// .shift() method in arrays is used to delete the value ("It's start "):

//part (6):

// colorArray.pop();
// console.log("Updated array (removed last color):", colorArray);

//.pop() method is used to delete the array  value form the last:


//part (7):

// const indexToAdd = parseInt(prompt("Enter a index number which you want to add a color"));
// const colorToAdd = prompt("Enter the color name which you want to add: ");
// colorArray.splice(indexToAdd,0,colorToAdd);
// console.log("Updated array(added color at specified index which you want)",colorArray);

 // .Splice() method  is used to (Delete and add particular value):

//part (8):

// const indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// const numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorArray.splice(indexToDelete, numColorsToDelete);
// console.log("Updated array (removed colors at specified index):", colorArray);

//QUESTION # 5

// Initialize an array with student scores
//const studentScores = [85, 92, 78, 95, 88];

// Sort the array in ascending order:
//studentScores.sort((a, b) => a - b);

// Display the sorted array:
//console.log("Sorted student scores (ascending order):", studentScores);

//QUESTION # 6

 // Array of phone manufacturers
//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

 // Write dropdown/select menu
//  document.write('<select id="manufacturerSelect">');
//  for (var i = 0; i < manufacturers.length; i++) {
//    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
//  }
//  document.write('</select>');

 //QESTION #7

  // Prompt the user to enter the table number
//   var tableNumber = parseInt(prompt("Enter the number for which you want to print the multiplication table:"));

  // Prompt the user to enter the length of the table
//   var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// Convert the input to a number (or use default value of 5 if no input is provided)
// tableNumber  = tableNumber ? parseInt(tableNumber) : 5;

// Display the multiplication table in the browser
// document.write("<h2>Multiplication Table of " +tableNumber  + "</h2>");

// for (var i = 1; i <= 10; i++) {
    // document.write(tableNumber  + " x " + i + " = " + (tableNumber * i) + "<br>");
//}
 
 //QUESTION # 8

  // a. Counting
//   document.write("<p>Counting: ");
//   for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // b. Reverse counting
//   document.write("<p>Reverse counting: ");
//   for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // c. Even
//   document.write("<p>Even: ");
//   for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // d. Odd
//   document.write("<p>Odd: ");
//   for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // e. Series
//   document.write("<p>Series: ");
//   for (var i = 1; i <= 10; i++) {
//     document.write((2 * i) + "k, ");
//   }

//QESTION # 9


// Array of items
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
// function searchItem(item) {
  // Convert the item to lowercase for case-insensitive search
//   var lowerCaseItem = item.toLowerCase();

  // Check if the item exists in the array
//   if (A.includes(lowerCaseItem)) {
//     alert("Yes, '" + item + "' is found in the list.");
//   } else {
//     alert("No, '" + item + "' is not found in the list.");
//   }
// }

// Prompt the user to enter the item for searching
// var userInput = prompt("Enter the item you want to search:");

// Call the searchItem function with the user input
// searchItem(userInput);


//QUESTION # 10,11
// var user = prompt("Enter a string:");
// var titleCaseString = user.toLowerCase().split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);});
// document.write("Input in title case: " + titleCaseString);


//QUESTION # 12
// var numberValue = +("472");
// document.write("Value: " + numberValue + "<br>");
// document.write("Type: " + typeof(numberValue));




