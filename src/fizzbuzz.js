module.exports.fizzbuzz = numebr => {

    // if(numebr == 1) return 1;
    // if(numebr == 2) return 2;
    // if(numebr == 3) return "Fizz";
    // if(numebr == 4) return 4;
    // if(numebr == 5) return "Buzz";
    // if(numebr == 6) return "Fizz";
    // if(numebr == 7) return 7;
    // if(numebr == 8) return 8;
    // if(numebr == 9) return "Fizz";

    if (number % 3 === 0 && numebr % 5 != 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number;

}