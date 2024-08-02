function inchToFeet(inches){
var feet = inches/12;
return feet;
}

var dadaInches = 132;
var feet = inchToFeet(dadaInches);
console.log('dada inches in feet', feet);


var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('nani inches in feet', feet);


var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('nana inches in feet', feet);


// mile to km
function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log('marathon in km', marathon);