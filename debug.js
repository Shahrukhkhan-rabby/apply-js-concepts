// function getFactorial(number){
//     let factorial = 1;
//     for(let i = 1; i<=number; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// const getMyFactorial = getFactorial(8);
//  console.log(getMyFactorial);


//  function celsiusToFahrenheit(celsius){
//     return (celsius * 9/5) + 32;
//  }
//  const tempCelsius = 25;
//  const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
//  console.log(tempFahrenheit)

 function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit-32) * (5/9);
 }
 const tempFahrenheit = 77;
 const tempCelsius = fahrenheitToCelsius(tempFahrenheit);
 console.log(tempCelsius);




 