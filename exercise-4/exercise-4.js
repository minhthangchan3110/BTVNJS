function leapYears(year) {
  return (year%100===0) ? (year%400===0) : (year%4===0);
}
console.log(leapYears(2016));
console.log(leapYears(2000));
console.log(leapYears(1700));
console.log(leapYears(1800));
console.log(leapYears(100));

function leapYear(years){
  if (years % 4 === 0){
    if(years % 100 === 0){
      if(years % 400 === 0){
        return "is a leap year"
      }
      else{
        return "is not a leap year"
      }
    }
    else{
      return "is a leap year"
    }
  }
  else{
    return "is not a leap year"
  }
  return 0;
}

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));