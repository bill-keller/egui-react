// const person = {

//   age: 26,
//   location: {
//     name: 'Bill',
//     city: 'mpls',
//     temp:30
//   } 
// }

// // default name
// const {name = 'anonymous', age} = person;

// // rename temp to temperature
// const { city, temp: temperature} = person.location;

// console.log(`${name} is ${age}`)
// console.log(`It's ${temperature} in ${city}`)


// const book = {
//   title: 'ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//       name: 'penguin'
//   }
// }

// const { name : publisherName = 'no publisher yet'  } = book.publisher;

// console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [drink, smallCost, mediumCost, largeCost] = item;
console.log(`A medium ${drink} costs ${mediumCost}`);
