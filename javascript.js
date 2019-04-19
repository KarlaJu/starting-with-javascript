let h1 = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let button = document.getElementById("change_button");
let paragraph_class = document.getElementsByClassName("lead");
let all_p_tags = document.querySelectorAll('p');
let greeting = document.getElementById('greeting');
let sum_result = document.getElementById("sum_result");
let string = "Using the $ symbol, you can print a variable";
const names_array = ['Alice', 'Eli', 'Irving', 'Olga'];
const user_registration = ['Alice', 23, 'Mexico', 'Developer'];
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

console.log(h1);
console.log(h1.innerHTML);
console.log(all_p_tags);
console.log('This is the our object: ',object);
console.log('Chapters from the object: ', object.chapters);
console.log('This is an object array: ', object_array);
console.log(`Using template strings, a easier way to print: ${string}`);

function change_style (){
  h1.innerHTML = "A new title by innerHTML";
  h1.style.color = "purple";
  h1.style.background = "green";
  paragraph.style.color = "olive";
};

button.addEventListener('click', function(){
  console.log('You clicked the button change');
})

button.addEventListener('mouseover', function(){
  console.log('You have passed the mouse over');
})

button.addEventListener('mouseout', function(){
  console.log('Goodbye mouse');
})

button.onclick = change_style;

let greet = name => 'Hello ' +name;
greeting.innerHTML = greet('Alice');

let result = (numberOne, numberTwo) => {
  let numberThree = 30;
  return numberOne + numberTwo + numberThree;
}
sum_result.innerHTML += result(10, 20);

const character_counter = names_array.map(name => `The name: ${name} has ${name.length} characters`);
console.log(character_counter);

function save_user(name, country, email, telephone_number = 'It was not specified') {
  return `Name: ${name}, Country: ${country}, email: ${email}, Telephone number: ${telephone_number}`;
}
console.log(save_user('Alice', 'Mexico', 'email@example.com'));

const [name, age, country, profession = 'It was not specified'] = user_registration;
console.log(`You can see the name using this way: ${name}`);
console.log(`The profession: ${profession}`);

print_user_info = ([name, ,country]) => console.log(`${name} is from ${country}`);
console.log(print_user_info(user_registration));