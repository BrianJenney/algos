
// // const fs = require('fs');
// // const path = require('path');

// // let fileObj = {};


// // // fs.readdir('/Users/brianjenney/Desktop', (err, files)=>{
// // //     files.forEach(file=>{
// // //         console.log(file);
// // //         fs.readFile('/Users/brianjenney/Desktop/' + file, 'utf-8', (err, contents)=>{
// // //         })
// // //     })
// // // })


// // var myArray     = [3, 4, 6, 10, 11, 15];
// // var alicesArray = [1, 5, 8, 12, 14, 19];

// // var stack = [];

// // while(myArray.length || alicesArray.length){

// //     stack.push(myArray[0] < alicesArray[0] ? myArray.shift() : alicesArray.shift());
// //     //console.log(stack);
// // }



// // const nums = [1, 7, 3, 4];

// // function products(arr){

// //     let finalArray = [];

// //     for(let i=0; i<arr.length; i++){
        
// //         const newArr = arr.filter((item, idx)=>{
// //             return idx != i
// //         });

// //         let mult = newArr.reduce((prev, cur)=>{
// //             return prev * cur;
// //         },1);

// //         finalArray.push(mult);
// //         console.log(finalArray);
// //     }

// // };

// // products(nums);


// // n - n/2 if even
// // n - 3n + 1 if odd

// var collatzObj = {};

// var arr = [];

// function collatz(x){

//     while(x !== 1){

//        arr.push(x) 

//        var x = (x%2 === 0 ? x/2 : (3*x) + 1);
//         console.log(x);
//        collatz(x);
//     }
//     console.log(arr);

// };


// collatz(13);



cb=(resp)=>{
    console.log(resp);
};


foo=(args, callBack)=>{
    callBack(args);
};

foo([3,2,1], cb);

[10,1,999,15,2].sort((a,b)=>{
    console.log((a-b) == true);
    console.log(`a is: ${a} and b is ${b}`);
});
