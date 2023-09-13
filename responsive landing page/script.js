const year = 2000;

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return console.log(`${year} is a leap year`);
  } else {
    return console.log(`${year} is not a leap year`);
  }
}
console.log(isLeapYear(year));
// switch (year) {
//   case (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0:
//     console.log(`${year} is a leap year`);
//     break;

//   default:
//     console.log(`${year} is not a leap year`);
// }
