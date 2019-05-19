
//Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.

const cars = ["Ford", "Mazda", "Toyota", "Nissan"];
console.log (cars.length);

//Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
const moreCars = ["Lexus", "Saturn", "Infiniti", "Honda"];

//Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
const totalCars = cars.concat(moreCars);
console.log (totalCars);

//Use the indexOf method to console.log the index of Honda.
console.log (moreCars.indexOf("Honda"));

//Use the lastIndexOf method to console.log the index of Ford.
console.log (cars.indexOf("Ford"));

//Use the join method to covert the array totalCars into a string called stringOfCars.
const stringOfCars = totalCars.join();
console.log (stringOfCars);

//Use the split method to convert stringOfCars back intro an array called totalCars.
console.log (stringOfCars.split(','));

//Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse();
console.log (carsInReverse);

//Use the sort method to put the array carsInReverse into alphabetical order.
carsInReverse = carsInReverse.sort();

console.log(carsInReverse);

//Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
const removedCars = carsInReverse.slice(0,2);
console.log(removedCars);

//Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse.splice(2,2,"Ford", "Honda");
console.log(carsInReverse);

//Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push("Infiniti", "Lexus");
console.log(carsInReverse);

//Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop());

//Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift());

//Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Subaru");
console.log(carsInReverse);

//Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let numbers = ["23", "45", "0", "2"];

//.forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. 
numbers.forEach(function(item){
    numbers.push(item + 2);
});
console.log(numbers);