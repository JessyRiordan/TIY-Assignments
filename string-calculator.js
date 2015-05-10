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
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "one"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "two"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "three"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "four"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "five"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "six"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "seven"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "eight"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "zero" && B === "nine"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "zero"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "one"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "two"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "three"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "four"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "five"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "six"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "seven"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "eight"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "one" && B === "nine"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "zero"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "one"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "two"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "three"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "four"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "five"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "six"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "seven"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "eight"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "two" && B === "nine"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "zero"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "one"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "two"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "three"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "four"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "five"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "six"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "seven"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "eight"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "three" && B === "nine"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "zero"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "one"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "two"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "three"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "four"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "five"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "six"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "seven"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "eight"){
    return toNumber(A) + toNumber(B);
  }
  if (A === "four" && B === "nine"){
    return toNumber(A) + toNumber(B);
  }
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

expect(add).to.exist;
expect(add("zero", "zero")).to.equal(0);
expect(add("zero", "one")).to.equal(1);
expect(add("zero", "two")).to.equal(2);
expect(add("zero", "three")).to.equal(3);
expect(add("zero", "four")).to.equal(4);
expect(add("zero", "five")).to.equal(5);
expect(add("zero", "six")).to.equal(6);
expect(add("zero", "seven")).to.equal(7);
expect(add("zero", "eight")).to.equal(8);
expect(add("zero", "nine")).to.equal(9);
expect(add("one", "zero")).to.equal(1);
expect(add("one", "one")).to.equal(2);
expect(add("one", "two")).to.equal(3);
expect(add("one", "three")).to.equal(4);
expect(add("one", "four")).to.equal(5);
expect(add("one", "five")).to.equal(6);
expect(add("one", "six")).to.equal(7);
expect(add("one", "seven")).to.equal(8);
expect(add("one", "eight")).to.equal(9);
expect(add("one", "nine")).to.equal(10);
expect(add("two", "zero")).to.equal(2);
expect(add("two", "one")).to.equal(3);
expect(add("two", "two")).to.equal(4);
expect(add("two", "three")).to.equal(5);
expect(add("two", "four")).to.equal(6);
expect(add("two", "five")).to.equal(7);
expect(add("two", "six")).to.equal(8);
expect(add("two", "seven")).to.equal(9);
expect(add("two", "eight")).to.equal(10);
expect(add("two", "nine")).to.equal(11);
expect(add("three", "zero")).to.equal(3);
expect(add("three", "one")).to.equal(4);
expect(add("three", "two")).to.equal(5);
expect(add("three", "three")).to.equal(6);
expect(add("three", "four")).to.equal(7);
expect(add("three", "five")).to.equal(8);
expect(add("three", "six")).to.equal(9);
expect(add("three", "seven")).to.equal(10);
expect(add("three", "eight")).to.equal(11);
expect(add("three", "nine")).to.equal(12);
expect(add("four", "zero")).to.equal(4);
expect(add("four", "one")).to.equal(5);
expect(add("four", "two")).to.equal(6);
expect(add("four", "three")).to.equal(7);
expect(add("four", "four")).to.equal(8);
expect(add("four", "five")).to.equal(9);
expect(add("four", "six")).to.equal(10);
expect(add("four", "seven")).to.equal(11);
expect(add("four", "eight")).to.equal(12);
expect(add("four", "nine")).to.equal(13);
expect(add("five", "zero")).to.equal(5);
expect(add("five", "one")).to.equal(6);
expect(add("five", "two")).to.equal(7);
expect(add("five", "three")).to.equal(8);
expect(add("five", "four")).to.equal(9);
expect(add("five", "five")).to.equal(10);
expect(add("five", "six")).to.equal(11);
expect(add("five", "seven")).to.equal(12);
expect(add("five", "eight")).to.equal(13);
expect(add("five", "nine")).to.equal(14);

console.log(add("zero", "one"))

console.log(1/9)

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
