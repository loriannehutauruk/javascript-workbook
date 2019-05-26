//1. Use a do...while loop to console.log the numbers from 1 to 1000.
let count = 0;
do {
  count += 1;
  console.log(count);
} while (count < 1000);


/* 3. Create an object (an array with keys and values) called person with the following data:
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"*/
const person = [{
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}
]

for (let prop in person) {
    let newDate = new Date (person[prop].birthDate);
    // console.log (newDate)
    let year = newDate.getFullYear();
    // console.log(year)

    if (year % 2 != 0) {
        console.log (person[prop].birthDate)    
    }

}

// 4. Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const persons = [{
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
},

{ 
    firstName: 'John',
    lastName: 'Doe',
    birthDate: 'Mar 15, 1945',
    gender: 'male'
},

{ 
    firstName: 'Tony',
    lastName: 'Rey',
    birthDate: 'Jan 18, 1919',
    gender: 'male'
},

{ 
    firstName: 'Boru',
    lastName: 'Batak',
    birthDate: 'Sep 10, 1990',
    gender: 'female'
}
]

//5. Use .map() to map over the arrayOfPersons and console.log() their information.

  const personInfo = persons.map(person => person.lastName);

  console.log(personInfo);

//6. Use .filter() to filter the persons array and console.log only males in the array.

console.log(persons.filter(x => x.gender != 'female'));

//7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

console.log(persons.filter(x => new Date(x.birthDate) < new Date("Jan 1, 1990")));