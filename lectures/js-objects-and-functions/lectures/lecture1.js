// Function COnstructor:
const john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

const Person = (name, yearOfBirth, job) => {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

let smith = new Person('Smith', 1988, 'Test Analyst');
console.log(smith);
