let randomLock = Math.floor(Math.random() * 5);
let location1 = randomLock;
let location2 = randomLock + 1;
let location3 = randomLock + 2;
let guess; //номер клітинки
let hits = 0; //кількість влучань
let guesses = 0; //кількість спроб
let isSunk = false; //потоплений корабель чи ні
let hitsArray = [];

while (isSunk == false) {
    guess = prompt("Введіть координати (enter a number 0-6):")
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    }
    else {
        guesses = guesses + 1;
        console.log(guesses)
    }
    if (guess == location1 || guess == location2 || guess == location3) {
        let found = hitsArray.find(element => element === guess);
        if (found) {
            alert("In this cell was hit before")
        }
        else {
            hits = hits + 1;
            hitsArray.push(guess)
            alert("HIT!")
        }

    }
    else {
        alert("MISS")
    }

    if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!")
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3 / guesses);
alert(stats);
