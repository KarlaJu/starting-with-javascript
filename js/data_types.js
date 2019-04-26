let numeric = 20;
let string = "Hello World";
let array = [1, "2", 3.0];
let boolean = true;
let undefined_variable;
let null_variable = null;
let object = {
  name: 'HTML',
  long: 15,
  state: true,
  chapters: {
    name: 'Introduction',
    videos: 20 
  }
}
let object_array = [
  {
    name: 'HTML',
    state: true
  },
  {
    name: 'CSS',
    state: true
  },
  {
    name: 'JS',
    state: false
  }
];

console.log('-------------Data types-------------');
console.log(`This a numeric variable: ${numeric}`);
console.log(`This is a string: ${string}`);
console.log(`This is an array ${array}`);
console.log(`This is the boolean variable: ${boolean}`);
console.log(`The undefined variable: ${undefined_variable}`);
console.log(`The null variable: ${null_variable}`);
console.log('This is the object: ',object)
console.log('This is an object array: ', object_array);
console.log('Chapters from the object: ', object.chapters);