//1
function repeatString(string, num) {
   if (num > 0){
    return string.repeat(num)
   }
   else{
    return "error"
   }
}

console.log(repeatString("hey", 3));
//2
function repeatString(string, num){
  var repeatedString = ""
  while(num > 0){
    repeatedString +=string;
    num--
  }
  return repeatedString
}
console.log(repeatString("hey", 3));