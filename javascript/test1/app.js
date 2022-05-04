// const output = "Hi, my name is " + name + " and my age is " + age + " years";
// const output = `Hi, my name is ${name} and my age is ${age < 30 ? "a" : "b"} years`;
// const output = `
// <div> This is div</div>`;

// console.log(output);
// const myName = "Anton";
// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.charAt(2));
// console.log(myName.indexOf("o"));
// console.log(myName.startsWith("Ant"));
// console.log(myName.endsWith("on"));
// console.log(myName.repeat(3));

// const string = "      password      ";
// console.log(string.trim());
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
  if (age < 0) {
    age = "Is not borned";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
const personName = "Anton";
const personName2 = "Lox";
const personAge = 21;
const personAge2 = -2;
const output = logPerson`Name: ${personName}, age: ${personAge}`;
const output2 = logPerson`Name: ${personName2}, age: ${personAge2}`;
console.log(output);
console.log(output2);
