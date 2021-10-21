/*
JAVASCRIPT BASICS. Part 1
1.Write a JS program to compute and print the sum of the two given integers
2.Write a JS program to create a new string adding “Test_" in front of a given string
3.Write a JS program to combine and print your first, last name and age
4.Write a JS program to check a given integer is bigger than 100
5.Write a JS program to find if the first number is larger from the two given positive integers
6.Write a JS program to check two given numbers and print true if one of the number is 50 or if their sum is 50
7.Write a JS program check if a given positive number is a multiple of 3 or a multiple of 7
*/

// 1
const sumNumbers = function (num1, num2) {
  return num1 + num2;
};

console.log(sumNumbers(4, 6));

// 2
const text = "task";
console.log("Test_" + text);

// 3
const nadiia = {
  firstName: "Nadiia",
  lastName: "Dorozhynska",
  age: 34,
};

console.log(
  `My first name is ${nadiia.firstName}, last name is ${nadiia.lastName} and I'm ${nadiia.age}`
);

// 4
const isNumberBigger = function (number) {
  if (number > 100) {
    return "Number " + number + " is bigger than 100";
  } else {
    return "Number " + number + " is less than 100";
  }
};

console.log(isNumberBigger(42));

// 5
const isFirstNumberBigger = function (num1, num2) {
  if (num1 > num2) return num1 + " is bigger than " + num2;
};

console.log(isFirstNumberBigger(500, 84));

// 6
const isNumberBiggerEqualFifty = function (num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) return true;
};

console.log(isNumberBiggerEqualFifty(49, 1));

// 7
const isNumberMultipleOf = function (number) {
  if (number % 3 === 0 && number % 7 === 0) {
    return number + " is multiple of 3 and 7";
  } else if (number % 7 === 0) {
    return number + " is multiple of 7";
  } else if (number % 3 === 0) {
    return number + " is multiple of 3";
  } else {
    return number + " is not multiple of 3 or 7";
  }
};

console.log(isNumberMultipleOf(21));
