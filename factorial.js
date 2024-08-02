// 3! = 3 X 2 X 1
// 4! = 4 X 3 X 2 X 1


   

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// for (var i = 1; i <= 7; i++) {
//     console.log("Factorial of " + i + " is " + factorial(i));
// }

var factorial = 1;
for (var i = 1; i <= 7; i++){
   factorial = factorial * i;
   
}
console.log(factorial);