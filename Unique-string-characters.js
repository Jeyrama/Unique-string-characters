/*
In this challenge, you will be given two strings a and b 
and your task will be to return the characters that are not common in the two strings.

For example:
solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string 
concatenated with those from the second string.
*/


// Solution

function solve(a,b){
  return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
 };

 // or

 function solve(a,b){
  let arr = [];
  for (let i = 0; i < a.length; i++){
      if (!(b.includes(a[i]))){
         arr.push(a[i])
      }
  }
  for (let i = 0; i < b.length; i++){
      if (!(a.includes(b[i]))){
          arr.push(b[i])
      }
  }
  return arr.join("");
}