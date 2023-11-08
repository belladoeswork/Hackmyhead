



// main: What program would you like to run? (length, yell, binary, or numSum?)

// 1. if input = [length]: Enter your word to calculate the number of characters: 
//if input = [yell]: Enter your word to yell:
//if input = [binary]: Enter string to filter for binary:
//if input = [numSum]: Enter number to calculate the sum of all the numbers it contains:
// for other commands: I don't recognize that command.

// 2. [input]  has [count] characters.
// [input] > just in all caps [input.toUpperCase()]!
// > binary (0,1) only [input.filter(binary)]!
// > sum of all numbers [input.sum()]

let request = prompt("What program would you like to run? (length, yell, binary, leet or numSum?)");
let resp = "";

if (request === "length") 
{
  resp = prompt("Enter your word to calculate the number of characters:");
  let count = 0;
  let i = 0;
  while (resp[i])
    {
        count++;
        i++;
    }
  alert(`${resp} has ${count} characters.`);
    // alert(count);
} 
else if (request === "yell") 
{
  resp = prompt("Enter your word to yell:");
  alert(resp.toUpperCase());
} 
else if (request === "binary") 
{
  resp = prompt("Enter string to filter for binary:");
    let binary = "";
    for(let i = 0; i < resp.length; i++)
    {
        if (resp[i] === "0" || resp[i] === '1') 
        {
            binary += resp[i];
        }   
    }
  alert(binary);
}
else if (request === "numSum" ) 
{
  resp = Number(prompt("Enter number to calculate the sum of all the numbers it contains:"));
  let sum = 0;
  for (let i = 0; i <= resp; i++)
  {
    sum += i;
  }

  alert(sum);
} 
else if (request === "leet") 
{
    resp = prompt("Enter your word to leet:");
    let texty = "";
    
    for (let i = 0; i < resp.length; i++) 
    {
        if (resp[i] === "a") {
            texty += "4";
        } else if (resp[i] === "e") {
            texty += "3";
        } else if (resp[i] === "i") {
            texty += "1";
        } else if (resp[i] === "o") {
            texty += "0";
        } else if (resp[i] === "u") {
            texty += "_";
        } else {
            texty += resp[i];
        }
    }

    alert(texty);
    // console.log(text);
}
else {
  alert("I don't recognize that command.");
}
