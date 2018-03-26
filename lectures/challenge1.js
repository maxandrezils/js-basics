var john = {
  firstname : 'John',
  height    : 182,
  age       : 26,
  get score () {
    return this.height + 5 * this.age;
  }
};
var smith = {
  firstname : 'Smith',
  height    : 127,
  age       : 21,
  get score(){
    return this.height + 5 * this.age;
  }
};

var other = {
  firstname : 'Other',
  height    : 197,
  age       : 29,
  get score(){
    return this.height + 5 * this.age;
  }
}

if (john.score > smith.score && john.score > other.score) {
  console.log(john.firstname + ' is the winner');
}else if(smith.score > john.score && smith.score > other.score){
  console.log(smith.firstname + ' is the winner');
}else{
  console.log(other.firstname + ' is the winner');
}
