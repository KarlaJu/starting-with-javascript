let iterator = 0;
console.log('-----------Loops------');

for(iterator=1; iterator<=5;iterator++){
  console.log(`The result using FOR is: ${iterator}`);
}

iterator = 1;
while(iterator <= 5){
  console.log(`The result using WHILE is: ${iterator}`);
  iterator++;
}

iterator = 1;
do{
  console.log(`The result using DO WHILE is: ${iterator}`);
  iterator++;
}while(iterator <= 5);