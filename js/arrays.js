
const array_example = ['Alice', 23, 'Mexico', 'Developer'];
const [name, age, country, profession = 'It was not specified'] = array_example;
array_example.push('CDMX');

console.log('----------------Array Examples----------------------------');
console.log(`You can see array elements in this way: ${array_example[0]}`);
console.log(`Also you can see the name using this way: ${name}`);
console.log(`The profession too: ${profession}`);
console.log(`You can add elements to the array: ${array_example}`);