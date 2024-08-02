function isLeapYear(year){
    if(year %4 ==0){
        if(year %100 ==0){
            if(year %400 ==0){
                return true;
            }
            return false;
        }
       return true;
    }
    return false;
}



const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);
const yourYear = 2100;
const isyourYearLeapYear = isLeapYear(yourYear);
console.log('Is your year leap year', isyourYearLeapYear);
