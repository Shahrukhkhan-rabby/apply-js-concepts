// const number = 4;
// const remainder = number % 2;
// console.log(number == 0)


function isEven(number){
if(number %2 == 0){
    return true;
}
return false
}


const myNumber =1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even', isMyNumberEven)


const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is my number even', isHerNumberEven)


function isOdd(number){
    if(number %2 != 0){
        return true;
    }
    return false
    }


const isMyNumberOdd = isOdd(myNumber);
console.log('is my number even', isMyNumberOdd)


const isHerNumberOdd = isOdd(herNumber);
console.log('is my number even', isHerNumberOdd)