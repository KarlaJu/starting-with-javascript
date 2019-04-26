
const array_example = ['Alice', 23, 'Mexico', 'Developer'];
let second_array_example = ['Ale', 30, 'España', 'PM'];
const [name, age, country, profession = 'It was not specified'] = array_example;
array_example.push('CDMX');
array_example.pop();
concatenation_of_two_arrays = array_example.concat(second_array_example);

console.log('----------------Array Examples----------------------------');
console.log(`You can see array elements in this way: ${array_example[0]}`);
console.log(`Also you can see the name using this way: ${name}`);
console.log(`The profession too: ${profession}`);
console.log(`You can add elements to the array: ${array_example}`);
console.log(`You can see how many elements do you have in the array: ${array_example.length}`);
console.log(`With method pop you extract the last element, so yo can't see CDMX element in array`);
console.log(`The concatenation of two arrays: ${concatenation_of_two_arrays}`);