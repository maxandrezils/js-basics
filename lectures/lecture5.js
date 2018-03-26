//////////////////////////////////////
// Lecture 5: Boolean Logic and Switch

var age = 16;
var job = 'teacher';

if ( age <= 20 ) {
  console.log('John is a teenager');
}else if(age > 20 && age < 30){
  console.log('John is a young man');
}else{
  console.log('John is a man.');
}

switch(job){
  case 'teacher':
    console.log('John teaches kids');
  break;
  case 'driver':
    console.log('John drives a cab');
  break;
}
