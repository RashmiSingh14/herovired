// Q4. Given an array, write a function to calculate its depth. Assume that a normal array has a depth of 1.

// Examples

// depth ([1, 2, 3, 4]) ➞ 1

//            depth ([1, [2, [3, 4]]]) ➞ 3

var count = 1;
var arr = [1, [2, [3, 4, 5, 6, [7, 8], 9]]];
//var    arr=[1, [2, [3, 4]]];
function depth(arr){
    for(var i=0; i< arr.length ; i++){
        //console.log('Array [', i,']', arr[i]);
        if(Array.isArray(arr[i])){
            //console.log('arr', arr[i]);
                count= count + 1;
                depth(arr[i]);
            }
    }
    
    //console.log(count);
}

depth(arr);
//depth ([1, 2, 3, 4]);

console.log('depth (',arr,')--> ', count);

