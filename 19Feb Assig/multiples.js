// Q3.  Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num 
//until the array length reaches length.

// Example: -arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// Notes: -Notice that num is also included in the returned array.

function arrayOfMultiples( num, length){
    var arr = [];
    for(var i=1; i<=length; i++){
        var mul = num * i;
        arr.push(mul);
        //console.log(mul);
    }

    console.log('arrayOfMultiples ', num, ' and ', length, ' : ', arr);
}

arrayOfMultiples(12,10);