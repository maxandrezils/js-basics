////////////////////////////////////////////////////////////////////////////////
// Lecture 3: Scoping and the Scope Chain                                     //
////////////////////////////////////////////////////////////////////////////////
let a = 'Hello';
first();
function first(){
  let b = 'Hi';
  second();
  function second(){
    let c = 'Hey!';
    third();
  }
}
function third(){
  let d = 'John';
  console.log(a + b + c + d);
}
