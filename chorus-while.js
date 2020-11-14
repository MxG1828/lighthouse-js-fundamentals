const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 8) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");


const chorusOne = "Let's dance!";
let repeatOne = 0;
while (repeatOne < 10) {
  if (repeatOne === 3 || repeatOne === 7) {
    console.log("*change key*");
  }
  console.log(chorusOne);
  repeatOne++;
}
console.log("Until the sun comes up!");