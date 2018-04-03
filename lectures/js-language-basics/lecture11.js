////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture 11: Loops and Iteration                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
let names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// For Loops:
for(let i = 0; i < 10; i++){
  console.log(i);
}
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
for (let i = names.length - 1; i >= 0; i-- )  {
  console.log(names[i]);
}
// While Loops:
let k = 0;
while(k < names.length){
  console.log(names[k]);
  k++;
}

// Break in a loop based on a condition:
for(let n = 0; n <= 10; n++){
  console.log(i);
  if(n === 3){
    break;
  }
}
// Continue in a loop based on a condition:
for(let n = 0; n <= 10; n++){
  if(n === 3){
    continue; // only what is between the brackets will be executed when the condition is met.
  }
  console.log(i);
}
