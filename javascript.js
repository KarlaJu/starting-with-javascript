var h1 = document.getElementById("title");
var paragraph = document.getElementById("paragraph");
var button = document.getElementById("change_button");
var paragraph_class = document.getElementsByClassName("lead");
var all_p_tags = document.querySelectorAll('p');
var greeting = document.getElementById('greeting');
var sum_result = document.getElementById("sum_result");

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

var greet = name => 'Hello ' +name;
greeting.innerHTML = greet('Alice');

var result = (numberOne, numberTwo) => {
  var numberThree = 30;
  return numberOne + numberTwo + numberThree;
}
sum_result.innerHTML += result(10, 20);