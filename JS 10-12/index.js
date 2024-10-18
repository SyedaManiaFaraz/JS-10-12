                    // CHAPTER N0 9
//QUESTION NO 6

function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}
let num = parseInt(prompt("Enter a number:"));
checkOddEven(num);


//QUESTION NO 7

function assignGrade(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("Grade: A");
            break;
        case (score >= 80 && score < 90):
            console.log("Grade: B");
            break;
        case (score >= 70 && score < 80):
            console.log("Grade: C");
            break;
        case (score >= 60 && score < 70):
            console.log("Grade: D");
            break;
        case (score >= 0 && score < 60):
            console.log("Grade: F");
            break;
        default:
            console.log("Invalid score. ");
    }
}

let score = parseInt(prompt("Enter the score:"));
assignGrade(score);


//QUESTION NO 8

function isLeapYear(year) {
    if (year % 4 === 0) {
       console.log("this is leap year")
    } else if (year % 400 === 0) {
         console.log("this is leap year")
    } else {
            console.log("this is not leap year")
    }
}

let year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


//QUESTION NO 9

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1 + " is the largest number.");
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
}

let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let number3 = parseFloat(prompt("Enter the third number:"));

findLargest(number1, number2, number3);



//QUESTION NO 10
function calculateFinalPrice(originalPrice) {
    let discount = 0;

    if (originalPrice < 50) {
        discount = 0;  
    } else if (originalPrice >= 50 && originalPrice <= 100) {
        discount = 0.10; 
    } else if (originalPrice > 100) {
        discount = 0.20;  
    }

    let discountAmount = originalPrice * discount;
    let finalPrice = originalPrice - discountAmount;

    console.log("Original Price: $" + originalPrice.toFixed(2));
    console.log("Discount Applied: " + (discount * 100) + "%");
    console.log("Final Price: $" + finalPrice.toFixed(2));

    return finalPrice;
}

let originalPrice = parseFloat(prompt("Enter the original price of the item:"));
calculateFinalPrice(originalPrice);



                        // CHAPTER NO 10

// QUESTION NO 1

function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(5, 10);
console.log(result);  


// QUESTION NO 2

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
let fahrenheit = celsiusToFahrenheit(10);
console.log(fahrenheit);  


// QUESTION NO 3

function isPrime(number) {
    if (number <= 1) {
        return false;  
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;  
        }
    }

    return true;  
}
console.log(isPrime(7));  
console.log(isPrime(10)); 


// QUESTION NO 4

function reverseString(str) {
    return str.split('').reverse().join('');
}
let reversed = reverseString("hello");
console.log(reversed);  


// QUESTION NO 5

function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (num === 0 || num === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(5));  
console.log(factorial(0));  


// QUESTION NO 6

function greetUser() {
    console.log("Hello, welcome!");
}
greetUser();  


// QUESTION NO 7

function greetUserByName(name) {
    console.log(`Hello, ${name}!`);
}
greetUserByName("MANIA"); 


// QUESTION NO 8

function sumNumbers(num1, num2) {
    return num1 + num2;
}
let reSult = sumNumbers(5, 8);
console.log(result);  


// QUESTION NO 9

function getRandomNumber() {
    return Math.floor(Math.random() * 101);
}
let randomNumber = getRandomNumber();
console.log(randomNumber);  


// QUESTION NO 10

function isEligibleToVote(age) {
    return age >= 18;
}
console.log(isEligibleToVote(20));  
console.log(isEligibleToVote(17));  


                            // CHAPTER NO 11

// QUESTION NO 1          

const square = (num) => num * num;
console.log(square(5));  
console.log(square(10)); 


// QUESTIO NO 2

const filterEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers); 


// QUESTION NO 3

const concatenateStrings = (str1, str2) => str1 + str2;
const result2 = concatenateStrings("Hello, ", "world!");
console.log(result);  


// QUESTION NO 4

const findMaxValue = (numbers) => Math.max(...numbers);
const numbersArray1 = [3, 5, 7, 2, 8, 1];
const maxValue = findMaxValue(numbersArray);
console.log(maxValue);  


// QUESTION NO 5

const sumNumbers = (numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);
const numbersArray2 = [1, 2, 3, 4, 5];
const totalSum = sumNumbers(numbersArray);
console.log(totalSum);  // Output: 15


// QUESTION NO 6

const greet = () => {
    console.log("Hello World");
};
greet();


// QUESTION NO 7

const square1 = (num) => num * num;
console.log(square(5)); 
console.log(square(10)); 


// QUESTION NO 8

const isPositive = (num) => num > 0;

console.log(isPositive(5));  
console.log(isPositive(-3));  
console.log(isPositive(0));   


// QUESTION NO 9 

const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;
const randomNumber1 = getRandomNumber();
console.log(randomNumber); 


// QUESTION NO 10

const minutesToSeconds = (minutes) => minutes * 60;
const seconds = minutesToSeconds(5);
console.log(seconds);  


                            // CHAPTER NO 12

// QUESTION NO 1

(function() {
    console.log("Hello");
})();


// QUESTION NO 2

const sum1 = function(a, b) {
    return a + b;
};

console.log(sum(3, 5)); 
console.log(sum(10, 15)); 


// QUESTION NO 3

const numbers1 = [5, 2, 8, 3, 1];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); 


// QUESTION NO 4

(function(name) {
    console.log(`Hello, ${name}!`);
})("Alice"); 


// QUESTION NO 5

const checkEvenOrOdd = function(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
};
checkEvenOrOdd(4);  
checkEvenOrOdd(7);  


// QUESTION NO 6
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0; 
});

console.log(oddNumbers); 


// QUESTION NO 7
const factorial = function(n) {
    if (n < 0) return undefined;

    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);
};

console.log(factorial(5)); 
console.log(factorial(0));  
console.log(factorial(3));  
console.log(factorial(-2)); 


// QUESTION NO 8

setTimeout(function() {
    console.log("Time's up!");
}, 2000); 


// QUESTION NO 9
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; 
}, 0); 
console.log(sum); 


// QUESTION NO 10

(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(20); 

(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(16); 

(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(18); 









