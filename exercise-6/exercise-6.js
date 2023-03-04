function convertNumber(number) {
  var binaryNum = new Array(32);  
  
  for(var i = 0;number>0;i++){
    binaryNum[i] = number % 2;
    number = Math.floor(number/2);
  }
  for (let j = i-1; j>=0;j--){
    console.log(binaryNum[j]);
  }
}
convertNumber(17)