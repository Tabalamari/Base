let shevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}
let cady = {
    make: "Cady",
    model: "GM",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
}
let dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls",
};
let bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
} bark = "woof woof";
let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

console.log(bark);

delete dog.name
console.log(dog.name)
console.log(dog)
console.dir(dog)


