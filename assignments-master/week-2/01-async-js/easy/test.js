// function mySetTimeout(fn, time) {
//     setTimeout(fn, time);
// }

// mySetTimeout(function() {
//     console.log("time over");
// }, 2000);

function mySetTimeout(time) {
  return new Promise(function (resolve, rej) {
    setTimeout(resolve, time);
  });
}

mySetTimeout(2000).then(function () {
  console.log("time over");
});
