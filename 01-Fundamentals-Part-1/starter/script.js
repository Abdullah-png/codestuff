//  let age = 75;
// age = 74; 
// console.log(age* 2, age/ 10 , 2**4,);
// // 2**4 means 2^4 or 2 raised to power 4
// const FirstName ='abdullah';
// const LastName = 'badmus';
// let FullName = FirstName+LastName;
// // let FullNames = FirstName*LastName;
// // does not work^^  
// // +' ' adds space to concatenated strings
// console.log(FullName);
// let AgeSarah=17;
// let AgeJosh=23;
// let x = 10 + 5;
// x+= 10 ; //:. x=x+10
// x*= 4 ; // :. x=x*4
// x/=6 ; // :. x=x/6
// x-=2 ; // :. x=x-2
// x++; // :. x=x+1
// x--;//:. x=x-1
// console.log( x);
// console.log(AgeJosh<AgeSarah);//< less,> greater, <= less equal, >=greater equal
// console.log(AgeJosh>=AgeSarah);
// const ageRange = AgeSarah>=18;
// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markWeight = 78;
// const johnWeight = 92;
// const markBMI = markWeight/(markHeight**2) ;
// const johnBMI = johnWeight/(johnHeight**2) ;
// const markHigherBMI = markBMI > johnBMI ;
// console.log(markHigherBMI);
// console.log(markBMI,johnBMI); 
// const  firstName ='bola';
// const lastName ='ahmed';
// let year = 2023;
// const birthYr = 1999;
// const FullName = `my name is ${firstName +' '+lastName} and i am ${year - birthYr } years old`;
// console.log(FullName);
// console.log(`i am a \n\ boss`);// \n\ represents a new ine in a string or just press entern on ur text editor
// const age = 9;
// if (age >= 18) {//when all the cndition are are met
//     console.log(`u can drive`);
// }else{//in case condithions of the if statement arent met
//     alert(`fuk off`)
//     console.log(`u have ${yearsleft} yrs left before u can drive `);
// }
// const no = 4 
// let race;
// if(no>=2){
//     race = `black`
//     console.log(race);
// }else{
//     race = `white`
//     console.log(race);
// }
// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markWeight = 78;
// const johnWeight = 92;
// const markBMI = markWeight/(markHeight**2) ;
// const johnBMI = johnWeight/(johnHeight**2) ;
// const markHigherBMI = markBMI > johnBMI ;
// console.log(markHigherBMI);
// console.log(markBMI,johnBMI); 
// if (markBMI>johnBMI) {
//     console.log(`mark's BMI (${markBMI}) is more than john's (${johnBMI})`);
// } else {
//     console.log(`johns's BMI ${johnBMI}is more than mark's ${markBMI}`);
// 
// const inputYear = `1991`;
// console.log(Number(inputYear) + 18);//Number() manually co nverts string  data types e.g 'dog','cat' to number data types e.g 1,2,89,900. and String() does the comeplete opposite
// let n = `1` + 1;// this equals 11 cus `1` is a string and 1 is a number in other word like 'a'+1 =1a a is a strig while 1 is a number
// n -= 1 ;// n=n(11)-1
// console.log(n);
// falsy values are 0, '' , null , NaN , undefined?
// '=='aka loose equality operator means one value is exactly equal to another in terms of figures it's a comparison operator p.s they don't have to be the same data type. it  performs type coercion but is rarely used
// const names = prompt(`what is ur name`);// it prompts u a question on the web page. data type conversions also affects the prompt 
// console.log(names);
// console.log(typeof names);
// if (names === names)// conditions are met  if names is equal to the response to the prompt alret (hi "reply to prompt ")
//  {
//     alert(`hi ${names}`)
// }
// console.log(names); 
// console.log(typeof names);
// if (names === `liv`)// conditions are met  v  
//  {
//     alert(`hi liv`)
// }else if (names === `bob`){
//     alert(`hi bob`)
// }else{
//     alert`not liv or bob`
// }

// if (names !== `liv`)// '!==' is the opposite of === when something isn't equal to anotherthing 
// {
//     console.log(`why not liv ?`);
// }
// logical operators work on the concept of boolean variables there are mainly 3 AND"&&" ,OR"||" ,& NOT"!"
// const day = `sunday`


// //this is a simpler variant of else if statements a colon(:) must always be put on after a case
// switch (day){
//     case `sunday`://incase the value of the variable'day' is === sunday log to the console `plan code`
//     console.log(`plan code `);
//     break;
//     case `monday`://incase the value of the variable'day' is === monday log to the console `m`
//         console.log(`m`);
//         break;

//     case `tuesday`://incase the value of the variable'day' is === tuesday log to the console `n`
//         console.log(`n`);
//         break;
//         case `monday`:
//             console.log(`nice`);
//             break;
//         default:
//             console.log(`w`);
// }
//  const age = 23;
//  age >= 18 ?//if age is >= 18 log to console i am >= 18 
//   console.log(`i am >= 18`):
//  console.log(`im not 18`);// else log to console i am not 18 
//  //its also caled a ternary operator
  
//    const drinkingAge = age>= 18? `wine`: `water`; 

//    console.log(drinkingAge );
// const bill = 275 ; 

//    let tip =// the name of the value in the ternary operator is tip
//       bill  <= 300 && bill >=50 ?//if the bill is between 300&50
//       tip = (15 * bill)/100 ://calculate the tip as 15% of the bill
//        tip = (20 * bill)/100;// else calculate the tip as 20% of the bill
//    let finalValue = bill + tip;
//    console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);