var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 to 4 and get 5', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })

  it('should subtract 4 from 7 and get 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  it('should multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  })

  it('should divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  it('should display concatenated numbers upon clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(4);
    calculator.numberClick(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 147);
  })

  it('should chain multiple operations together', function() {
    calculator.runningTotal = 5;
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 7);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 5;
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 8);
  })
  





});
