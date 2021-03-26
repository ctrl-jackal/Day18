// Only change code below this line
function* myGenerator(){
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}
function* insideGenerator1(){
  let x = 0;
  for (i = 0; i < 5; i++) {
    x++;
    yield x;
  }
}
function* insideGenerator2(){
  let x = 9;
  for (i = 0; i <= 5; i++) {
    x++;
    yield x;
  }
}
function* insideGenerator3(){
  let x = 5;
  for (i = 0; i < 4; i++) {
    x++;
    yield x;
  }
}

var iterator = myGenerator();
var fifteenArray = [];

console.log(iterator);

for (let i = 0; i <= 15; i++) {
  fifteenArray.push(iterator.next(i).value);
}

console.log(fifteenArray.join("#, ") + "undefined!");
// for (let n of iterator) {
//   fifteenArray.push(`${n}#`);
// }
// Only change code above this line
// console.log(fifteenArray);

module.exports = { fifteenArray, myGenerator };
