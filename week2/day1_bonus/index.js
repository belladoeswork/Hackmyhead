// var declaration

// let ans1 = "number";
// let ans2 = "string";
// let ans3 = "boolean";


// home screen
// alert("Proceed to the AI detention server robot!");

// condition 1
let input = prompt("Are you a human?");

if (!(input === "yes" || input === "Yes" || input === "YES" || input === "y" || input === "Y" || input === "ye" || input === "Ye" || input === "YE" || input === "yeah" || input === "I\'m human")) 
{   
    alert("Proceed to the AI detention server robot!");
}
else {
    let input1 = prompt("Then you won't mind telling me what data type this is: 3");
    let input2 = prompt("What about this: 'Am I real?'");
    let input3 = prompt("And this: false");
    let input4 = prompt("What is 2 + 2");
  
    if (
      (input1 === "number" ||
      input1 === "Number" ||
      input1 === "NUMBER" ||
      input1 === "num" ||
      input1 === "Num" ||
      input1 === "NUM" ||
      input1 === "integer" ||
      input1 === "Integer" ||
      input1 === "INTEGER") &&
      (input2 === "string" ||
      input2 === "String" ||
      input2 === "STRING" ||
      input2 === "str" ||
      input2 === "Str" ||
      input2 === "STR" ||
      input2 === "text" ||
      input2 === "Text" ||
      input2 === "TEXT") &&
      (input3 === "boolean" ||
      input3 === "Boolean" ||
      input3 === "BOOLEAN" ||
      input3 === "bool" ||
      input3 === "Bool" ||
      input3 === "BOOL")
    ) {
      if (input4 === "4" || input4 === "four" || input4 === "Four") {
        alert("You have been verified as a human, proceed.");
      } else {
        alert("Proceed to the AI detention server robot!");
      }
    } else {
      alert("Proceed to the AI detention server robot!");
    }

  
}