/////// function declaration ::
// const now = 2025
// function calcAge (birthYear){
//  return now - birthYear
// }
// console.log(calcAge(2000))

////// function expression ::

// const calcAge2 = function (waktechtouled){
//    return now - waktechtouled
// }

// console.log(calcAge2(1999))

////// arrow function :::
/// first syntax :
// const now = 2025
// const calcAge3 =  birthYear =>  now - birthYear  ;
// console.log(calcAge3(2001))

///2 second syntax :
// const now = 2025
// const yearsUntilRetirement = birthYear =>{
//     const age =  now -birthYear ;
//     console.log("age:" , age)
//     const retirement = 60 - age ;
//     return retirement ;
// }

// console.log(yearsUntilRetirement(1998))
/// 3 third syntax :
// const now = 2025

// const yearsUntilRetirement2 = (birthYear , firstName)=>{
//   const age =  now - birthYear ;
//   const retirement = 60 - age
//   return `${firstName} retires in ${retirement} years ...`
// }

// console.log(yearsUntilRetirement2(1995,"jhonas"))

////// function calling other function ....

////// first exemple :::

// const cutPieces = fruit => fruit * 4 ;

// function fruitProcessor (apple ,orange) {
//    const applePieces = cutPieces(apple)
//    const orangePieces = cutPieces(orange)
//    let juice = ` juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
//    return juice ;
// }

// console.log(fruitProcessor(5,15))

/////// second exemple ::::

// const now = 2025;
// const calcAge = function (birthYear) {
//   return now - birthYear;
// };

// function yearsUntilRetirement(x, firstname) {
//   const age = calcAge(x);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     const result = `${firstname} retires in ${retirement} years ...`;
//     return result;
//   } else {
//     return `${firstname} has already retires ...`;
//   }
// }

// console.log(yearsUntilRetirement(1960, "jhonas"));

// const calcAverage2 = function (a,b,c) {
//     return (a+b+c) / 3 ; 
// }

// console.log(calcAverage2(3,4,5))

//// correction of challange :::: 
// const calcAverage = (a,b,c)=>(a+b+c) / 3  ; 

///// data1 :
// const dolphins = calcAverage(44,23,71) ;
// const koalas = calcAverage(65,54,49) ; 
//// data2 : 
// const dolphins2 = calcAverage(85,54,41)
// const koalas2 = calcAverage(23,34,27)

// console.log("average of dolphins:" , dolphins , "average of koalas:" , koalas) 
// console.log("average of dolphins2:" , dolphins2 , "average of koalas2:" , koalas2) 

// function checkWinner (avgdolph , avgkoala) {
//   if (avgdolph >= avgkoala * 2){
//     console.log(`Dolphins win 🏆 ${avgdolph} vs ${avgkoala}`)
//   }
//   else if (avgkoala >= avgdolph *2){
//     console.log(`koals win 🏆 ${avgkoala} vs ${avgdolph}`)

//   }
//   else {
//     console.log("no team win 😥 ..... ")
//   }
// }

// checkWinner(dolphins,koalas)
// checkWinner(dolphins2,koalas2)
