// Only change code below this line
let rockStar = new Map();

rockStar.set("artist", "The Rolling Stones").set("song", "Angie").set("album", "Goats Head Soup").set("singer", "Mick Jagger");

let newRock = new Map();
for (let [key, value] of rockStar.entries()) {
  if (key[0] > "a") {
    newRock.set(key, value);
  }
}
console.log(rockStar);
console.log(newRock);

// Only change code above this line

module.exports = { rockStar, newRock };
