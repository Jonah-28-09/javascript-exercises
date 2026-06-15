const sumAll = function(num1, num2) {

    let min = 0;
    let max = 0;
    let result = 0;
    if (num1 > num2){
        min = num2, max = num1
    }
    else{
        min = num1, max = num2
    }
    for (let i = min; i <= max; i++){
        i += i
    }
};

// Do not edit below this line
module.exports = sumAll;
