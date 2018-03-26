// Lecture 4: If/Else Statementd
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes'){
  console.log(name + ' is married!');
}else{
  console.log(name + ' will hopefully marry soon :) ');
}

isMarried = false;

if(isMarried){
  console.log('YES!');
}else{
  console.log('NO!');
}
// The else isnt required
