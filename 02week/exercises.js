const cars = ["Ford", "Mazda", "Toyota", "Nissan"];
console.log (cars.length);

const moreCars = ["Lexus", "Saturn", "Infiniti", "Honda"];

const totalCars = cars.concat(moreCars);
console.log (totalCars);

console.log (moreCars.indexOf("Honda"));

console.log (cars.indexOf("Ford"));

const stringOfCars = totalCars.join();
console.log (stringOfCars);

console.log (stringOfCars.split(','));

let carsInReverse = totalCars.reverse();
console.log (carsInReverse);

carsInReverse = carsInReverse.sort();

console.log(carsInReverse);

const removedCars = carsInReverse.slice(0,2);
console.log(removedCars);

carsInReverse.splice(2,2,"Ford", "Honda");
console.log(carsInReverse);

carsInReverse.push("Infiniti", "Lexus");
console.log(carsInReverse);

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

carsInReverse.unshift("Subaru");
console.log(carsInReverse);

let numbers = ["23", "45", "0", "2"];

numbers.forEach(function(item){
    numbers.push(item + 2);
});
console.log(numbers);