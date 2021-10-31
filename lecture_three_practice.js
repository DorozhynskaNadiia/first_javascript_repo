/*
1.Write a JavaScript function to get the last element of an array
2. Write a simple JavaScript program to join all elements of the following array into a string
3. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array
4. Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
*/

//1
const getLastElement = (array = []) => {
  return array[array.length - 1];
};

const friends = ["Michael", "Steven", "Peter"];
console.log(getLastElement(friends));

//2
console.log(friends.join(""));

//3
const getSumArray = (arr1 = [], arr2 = []) => {
  let arr3 = [];
  const maxArrayLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxArrayLength; i++) {
    const sumOfValues = (arr1[i] || 0) + (arr2[i] || 0);
    arr3.push(sumOfValues);
  }
  return arr3;
};

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7];

console.log(getSumArray(array1, array2));

//4
const rectangle = {
  width: 24,
  height: 22,

  getArea: function () {
    if (!this.height || !this.width) {
      throw new Error("Height and width have to be specified");
    }
    return this.height * this.width;
  },

  getPerimeter: function () {
    return 2 * (this.height + this.width);
  },
};

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
