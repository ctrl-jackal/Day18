// Only change code below this line
function* myGenerator(){
  yield* [1, 2, 3, 4, 5];
  yield* "Arena";
  yield* arguments;
}

var generatorArray = [];

var iterator = myGenerator(6, 7, 8);

for (let n of iterator) {
  generatorArray.push(n);
}
console.log(generatorArray);
// Only change code above this line

module.exports = { generatorArray, myGenerator };
