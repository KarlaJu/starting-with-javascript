
const array_example = ['Alice', 23, 'Mexico', 'Developer'];
const [name, age, country, profession = 'It was not specified'] = array_example;
array_example.push('CDMX');
array_example.pop();

console.log('----------------Array Examples----------------------------');
console.log(`You can see array elements in this way: ${array_example[0]}`);
console.log(`Also you can see the name using this way: ${name}`);
console.log(`The profession too: ${profession}`);
console.log(`You can add elements to the array: ${array_example}`);
console.log(`You can see how many elements do you have in the array: ${array_example.length}`);
console.log(`With method pop you extract the last element, so yo can't see CDMX element in array`);