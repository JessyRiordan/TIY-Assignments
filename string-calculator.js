var expect = require("chai").expect;

function toNumber(word){
  if ( word === "zero" ){
    return 0;
  }
  if ( word === "one" ){
    return 1;
  }
  if ( word === "two" ){
    return 2;
  }
  if ( word === "three" ){
    return 3;
  }
  if ( word === "four" ){
    return 4;
  }
  if ( word === "five" ){
    return 5;
  }
  if ( word === "six" ){
    return 6;
  }
  if ( word === "seven" ){
    return 7;
  }
  if ( word === "eight" ){
    return 8;
  }
  if ( word === "nine" ){
    return 9;
  }
}

function plus(A, B){
  return (toNumber(A) + toNumber(B));
}

function minus(A, B){
  return (toNumber(A) - toNumber(B));
}

function multiply(A, B){
  return (toNumber(A) * toNumber(B));
}

function divide(A, B){
  return (toNumber(A) / toNumber(B));
}

expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2);
expect(toNumber("three")).to.equal(3);
expect(toNumber("four")).to.equal(4);
expect(toNumber("five")).to.equal(5);
expect(toNumber("six")).to.equal(6);
expect(toNumber("seven")).to.equal(7);
expect(toNumber("eight")).to.equal(8);
expect(toNumber("nine")).to.equal(9);



expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1);
expect(plus("zero", "two")).to.equal(2);

expect(minus).to.exist;
expect(minus("four", "two")).to.equal(2);

expect(multiply).to.exist;
expect(multiply("five", "three")).to.equal(15);

console.log(multiply("three", "four"))

expect(divide).to.exist;
expect(divide("five", "one").to.equal(5)
