let myArr = [];
// Only change code below this line

function* multiplication(x){
  for (let i = x; i > 0; i--) {
    yield (x *= 2);
    myArr.push(x);
  }
}

var num = multiplication(3);

// for (let n of num){
//   console.log(n);
// }

for (let i = 0; i < 3; i++){
  console.log(num.next(i).value);
}

// Only change code above this line

module.exports = multiplication;
