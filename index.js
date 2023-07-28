function callMe(name) {
  return `Hello, ${name}!`;
}

const dontCall = (name) => {
  console.log(`Hello, ${name}!`);
};

const square = (number) => number * number;

console.log(square(2));
console.log(callMe("Bruh"));
dontCall("John");
