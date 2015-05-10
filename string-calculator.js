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
    var A = 0;
    var B = 0;
  }
  if (A === "zero" && B === "one"){
    var A = 0;
    var B = 1;
  }
  if (A === "zero" && B === "two"){
    var A = 0;
    var B = 2;
  }
  if (A === "zero" && B === "three"){
    var A = 0;
    var B = 3;
  }
  if (A === "zero" && B === "four"){
    var A = 0;
    var B = 4;
  }
  if (A === "zero" && B === "five"){
    var A = 0;
    var B = 5;
  }
  if (A === "zero" && B === "six"){
    var A = 0;
    var B = 6;
  }
  if (A === "zero" && B === "seven"){
    var A = 0;
    var B = 7;
  }
  if (A === "zero" && B === "eight"){
    var A = 0;
    var B = 8;
  }
  if (A === "zero" && B === "nine"){
    var A = 0;
    var B = 9;
  }
  if (A === "one" && B === "zero"){
    var A = 1;
    var B = 0;
  }
  if (A === "one" && B === "one"){
    var A = 1;
    var B = 1;
  }
  if (A === "one" && B === "two"){
    var A = 1;
    var B = 2;
  }
  if (A === "one" && B === "three"){
    var A = 1;
    var B = 3;
  }
  if (A === "one" && B === "four"){
    var A = 1;
    var B = 4;
  }
  if (A === "one" && B === "five"){
    var A = 1;
    var B = 5;
  }
  if (A === "one" && B === "six"){
    var A = 1;
    var B = 6;
  }
  if (A === "one" && B === "seven"){
    var A = 1;
    var B = 7;
  }
  if (A === "one" && B === "eight"){
    var A = 1;
    var B = 8;
  }
  if (A === "one" && B === "nine"){
    var A = 1;
    var B = 9;
  }
  if (A === "two" && B === "zero"){
    var A = 2;
    var B = 0;
  }
  if (A === "two" && B === "one"){
    var A = 2;
    var B = 1;
  }
  if (A === "two" && B === "two"){
    var A = 2;
    var B = 2;
  }
  if (A === "two" && B === "three"){
    var A = 2;
    var B = 3;
  }
  if (A === "two" && B === "four"){
    var A = 2;
    var B = 4;
  }
  if (A === "two" && B === "five"){
    var A = 2;
    var B = 5;
  }
  if (A === "two" && B === "six"){
    var A = 2;
    var B = 6;
  }
  if (A === "two" && B === "seven"){
    var A = 2;
    var B = 7;
  }
  if (A === "two" && B === "eight"){
    var A = 2;
    var B = 8;
  }
  if (A === "two" && B === "nine"){
    var A = 2;
    var B = 9;
  }
  if (A === "three" && B === "zero"){
    var A = 3;
    var B = 0;
  }
  if (A === "three" && B === "one"){
    var A = 3;
    var B = 1;
  }
  if (A === "three" && B === "two"){
    var A = 3;
    var B = 2;
  }
  if (A === "three" && B === "three"){
    var A = 3;
    var B = 3;
  }
  if (A === "three" && B === "four"){
    var A = 3;
    var B = 4;
  }
  if (A === "three" && B === "five"){
    var A = 3;
    var B = 5;
  }
  if (A === "three" && B === "six"){
    var A = 3;
    var B = 6;
  }
  if (A === "three" && B === "seven"){
    var A = 3;
    var B = 7;
  }
  if (A === "three" && B === "eight"){
    var A = 3;
    var B = 8;
  }
  if (A === "three" && B === "nine"){
    var A = 3;
    var B = 9;
  }
  if (A === "four" && B === "zero"){
    var A = 4;
    var B = 0;
  }
  if (A === "four" && B === "one"){
    var A = 4;
    var B = 1;
  }
  if (A === "four" && B === "two"){
    var A = 4;
    var B = 2;
  }
  if (A === "four" && B === "three"){
    var A = 4;
    var B = 3;
  }
  if (A === "four" && B === "four"){
    var A = 4;
    var B = 4;
  }
  if (A === "four" && B === "five"){
    var A = 4;
    var B = 5;
  }
  if (A === "four" && B === "six"){
    var A = 4;
    var B = 6;
  }
  if (A === "four" && B === "seven"){
    var A = 4;
    var B = 7;
  }
  if (A === "four" && B === "eight"){
    var A = 4;
    var B = 8;
  }
  if (A === "four" && B === "nine"){
    var A = 4;
    var B = 9;
  }
  if (A === "five" && B === "zero"){
    var A = 5;
    var B = 0;
  }
  if (A === "five" && B === "one"){
    var A = 5;
    var B = 1;
  }
  if (A === "five" && B === "two"){
    var A = 5;
    var B = 2;
  }
  if (A === "five" && B === "three"){
    var A = 5;
    var B = 3;
  }
  if (A === "five" && B === "four"){
    var A = 5;
    var B = 4;
  }
  if (A === "five" && B === "five"){
    var A = 5;
    var B = 5;
  }
  if (A === "five" && B === "six"){
    var A = 5;
    var B = 6;
  }
  if (A === "five" && B === "seven"){
    var A = 5;
    var B = 7;
  }
  if (A === "five" && B ==="eight"){
    var A = 5
    var B = 8
  }
  if (A === "five" && B === "nine"){
    var A = 5
    var B = 9
  }
  return A + B
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

console.log(add("five", "seven"))

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
