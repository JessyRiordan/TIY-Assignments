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

function add(A, B){
  if (A === "zero" && B === "zero"){
    return 0
  }
  if (A === "zero" && B === "one"){
    return 1;
  }
  if (A === "zero" && B === "two"){
    return 2;
  }
  if (A === "zero" && B === "three"){
    return 3;
  }
  if (A === "zero" && B === "four"){
    return 4;
  }
  if (A === "zero" && B === "five"){
    return 5;
  }
  if (A === "zero" && B === "six"){
    return 6;
  }
  if (A === "zero" && B === "seven"){
    return 7;
  }
  if (A === "zero" && B === "eight"){
    return 8;
  }
  if (A === "zero" && B === "nine"){
    return 9;
  }
  if (A === "one" && B === "zero"){
    return 1;
  }
  if (A === "one" && B === "one"){
    return 2;
  }
  if (A === "one" && B === "two"){
    return 3;
  }
  if (A === "one" && B === "three"){
    return 4;
  }
  if (A === "one" && B === "four"){
    return 5;
  }
  if (A === "one" && B === "five"){
    return 6;
  }
  if (A === "one" && B === "six"){
    return 7;
  }
  if (A === "one" && B === "seven"){
    return 8;
  }
  if (A === "one" && B === "eight"){
    return 9;
  }
  if (A === "one" && B === "nine"){
    return 10;
  }
  if (A === "two" && B === "zero"){
    return 2;
  }
  if (A === "two" && B === "one"){
    return 3;
  }
  if (A === "two" && B === "two"){
    return 4;
  }
  if (A === "two" && B === "three"){
    return 5;
  }
  if (A === "two" && B === "four"){
    return 6;
  }
  if (A === "two" && B === "five"){
    return 7;
  }
  if (A === "two" && B === "six"){
    return 8;
  }
  if (A === "two" && B === "seven"){
    return 9;
  }
  if (A === "two" && B === "eight"){
    return 10;
  }
  if (A === "two" && B === "nine"){
    return 11;
  }
}

expect(add).to.exist;
expect(add("zero", "zero")).to.equal(0);

console.log(add("zero", "zero"))

// NIGHTMARE MODE

/* function plus(A, B){
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
expect(divide("five", "one").to.equal(5) */
