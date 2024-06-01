// // function mySetTimeout(fn, time) {
// //     setTimeout(fn, time);
// // }

// // mySetTimeout(function() {
// //     console.log("time over");
// // }, 2000);

// function mySetTimeout(time) {
//   return new Promise(function (resolve, rej) {
//     setTimeout(resolve, time);
//   });
// }

// mySetTimeout(2000).then(function () {
//   console.log("time over");
// });


// function sum(a, cb) {
//     console.log(2)
//     cb(a*a);
// }

// sum(8, function(res) {
//     console.log(1);
//     console.log(res);
// })

function promisifiedSum(a, b) {
    return new Promise(function (res, rej) {
        setTimeout(function() {
            res(a+b);
        }, 2000);
    })
}

promisifiedSum(3, 5).then(function(res) {
    console.log(res)
} )
