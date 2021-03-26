// Only change code below this line
let shoppingList = new Map();

shoppingList.set("Banana", 3).set("Pineapple", 5).set("Pear", 2).set("Carrot", 10).set("Apple", 1.5);

// console.log(shoppingList);
var arrKey = [];
var arrValue = [];

for (let key of shoppingList.keys()) {
  arrKey.push(key);
  // console.log(`groceries:  ${key}`)
}
for (let value of shoppingList.values()) {
  arrValue.push(value);
  // console.log(`amount:  ${value}`)
}

console.log(arrKey.map((i) => "groceries:  " + i).join("\n"));
console.log(arrValue.map((i) => "amount:  " + i).join("\n"));

for (let entry of shoppingList) console.log(entry);

// console.log(arrKey);
// console.log(arrValue);

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };
