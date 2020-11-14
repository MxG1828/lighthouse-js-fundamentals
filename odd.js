let isOdd = function(num){
  let x;
  num % 2 === 1 ?  x = true :  x =  false;
  return x;
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));