let h1 = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let button = document.getElementById("change_button");
let paragraph_class = document.getElementsByClassName("lead");
let all_p_tags = document.querySelectorAll('p');
let greeting = document.getElementById('greeting');
let sum_result = document.getElementById("sum_result");
const names_array = ['Alice', '23', 'Mexico', 'Developer'];

console.log('--------------Functions------------');
console.log(h1);
console.log(h1.innerHTML);
console.log(all_p_tags);

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

const character_counter = names_array.map(name => `The element: ${name} has ${name.length} characters`);
console.log(character_counter);

function save_user(name, country, email, telephone_number = 'It was not specified') {
  return `Name: ${name}, Country: ${country}, email: ${email}, Telephone number: ${telephone_number}`;
}
console.log(save_user('Alice', 'Mexico', 'email@example.com'));

print_user_info = ([name, ,country]) => console.log(`${name} is from ${country}`);
console.log(print_user_info(names_array));