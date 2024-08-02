var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.push();

// conditionals
if(bookPrice < 120){
    console.log('I will buy this book')
}
else{
    console.log('Mama kichu discount den na, apni na Mama');
}

// loop
var i = 0;
while(i <= 17){
    console.log('do some work');
    i++;
}
for(var i = 0; i < 17; i++){
    console.log(i);
}

// function
function isMoonUp(time){
    if(time >=19 && time <= 5 ){
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);

// let const

// value of variable could change
let price = 27;
price = 29;
price = 31;


// value of the variable will not change
let myName = 'lal a lal mr. Helal';
console.log(myName);
myName = 22;
