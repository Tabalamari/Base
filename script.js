const location1 = 2;
const location2 = 3;
const location3 = 4;
let guess; //номер поточної спроби
const hits = 0; //кількість влучань
const guesses = 0; //кількість спроб
const isSunk = false; //потоплений корабель чи ні

while (isSunk == false) {
    guess = prompt("Введіть координати (enter a number 0-6):")
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }
    if (guess == location1 || guess == location2 || guess == location3) {
        hits = hits + 1;
    }
    if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!")
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + alert(stats); "which means your shooting accuracy was " + (3 / guesses);

