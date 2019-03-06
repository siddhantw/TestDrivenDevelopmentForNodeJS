var expect = require('chai').expect;

function fizzBuzz(value){
    if(value%3 == 0){
        if(value%5 == 0)
            return 'FizzBuzz';
        return 'Fizz';
    }

    if(value%5 == 0)
        return 'Buzz';

    return value.toString();
}

function checkFizzBuzz(testValue, expectedResult){
    var result = fizzBuzz(testValue);
    expect(result).to.equal(expectedResult);
}

it('returns 1 with 1 passed in', function(){
    checkFizzBuzz(1, '1');
});

it('returns 2 with 2 passed in', function(){
    checkFizzBuzz(2, '2');
});

it('returns Fizz with 3 passed in', function(){
    checkFizzBuzz(3, 'Fizz');
});

it('returns Buzz with 5 passed in', function(){
    checkFizzBuzz(5, 'Buzz');
});

it('returns FizzBuzz with 15 passed in', function(){
    checkFizzBuzz(15, 'FizzBuzz');
});