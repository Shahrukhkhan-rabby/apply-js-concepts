// let factorialorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorialorial = factorialorial * i;
// }
// console.log(factorialorial);



function getFactorial(number){
    let factorial = 1;
for(let i = 1; i =number; i++){
    factorial = factorial * 1;
}  
return factorial;
}

var firstFactorial = getFactorial(7);
console.log('factorial of 7', firstFactorial);

var secondFactorial = getFactorial(9);
console.log('factorial of 9', secondFactorial);