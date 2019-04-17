var h1 = document.getElementById("title");
var paragraph = document.getElementById("paragraph");
var button = document.getElementById("change_button");

console.log(h1);
console.log(h1.innerHTML);
function change_style (){
  h1.innerHTML = "A new title by innerHTML";
  h1.style.color = "purple";
  h1.style.background = "green";
  paragraph.style.color = "olive";
}

button.onclick = change_style;