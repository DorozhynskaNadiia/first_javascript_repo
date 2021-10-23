/*
1. Write a JavaScript function to check if given string includes
given symbol.
2. Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).
3. Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Name Surname")) – should be “N.S.” (should convert lower case names to upper)
4. Write a JavaScript function that accept two integers and
display the larger.
5. Write a JavaScript function with conditional statement to sort three numbers
*/

//1
const ifStringIncludesSymbol = (str, symbol) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === symbol) {
      return `String "${str}" constains symbol "${symbol}"`;
    }
  }
  return `No such symbol "${symbol}" in string "${str}"`;
};

console.log(ifStringIncludesSymbol("My name is Nadiia", "l"));

//2
const ifStringIsBlank = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " ") {
      return `String ${str} is not blank`;
    }
  }
  return `String "${str}" is blank`;
};

console.log(ifStringIsBlank(""));
console.log(ifStringIsBlank(" "));
console.log(ifStringIsBlank("  "));
console.log(ifStringIsBlank("dfdf "));

//3
const convertStringToAbreviated = (str) => {
  let abreviated = "";
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      abreviated = abreviated + words[i].charAt(0).toUpperCase() + ".";
    }
  }
  return abreviated;
};

console.log(convertStringToAbreviated("eleks   academy"));

//4
const findLargerNumber = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} is larger than ${num2}`;
  } else if (num2 > num1) {
    return `${num2} is larger than ${num1}`;
  } else {
    return `${num1} and ${num2} are equal`;
  }
};

console.log(findLargerNumber(4, 7));

//5
const sortNumbers = (a, b, c) => {
  if (a <= b && a <= c) {
    if (b <= c) {
      return `Correct order is ${a}, ${b}, ${c}`;
    } else {
      return `Correct order is ${a}, ${c}, ${b}`;
    }
  } else if (b <= a && b <= c) {
    if (a <= c) {
      return `Correct order is ${b}, ${a}, ${c}`;
    } else {
      return `Correct order is ${b}, ${c}, ${a}`;
    }
  } else if (c <= a && c <= b) {
    if (a <= b) {
      return `Correct order is ${c}, ${a}, ${b}`;
    } else {
      return `Correct order is ${c}, ${b}, ${a}`;
    }
  }
};

console.log(sortNumbers(1, 2, 3));
console.log(sortNumbers(1, 3, 2));
console.log(sortNumbers(1, 1, 1));
console.log(sortNumbers(1, 2, 2));
console.log(sortNumbers(3, 2, 1));
console.log(sortNumbers(3, 1, 2));
console.log(sortNumbers(3, 3, 2));
