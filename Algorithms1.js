const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key = 5;

//o(n) linear time
function linearSearch(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(array, key));

//o(logn) logarithmic time
function binarySearch(array, key) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (array[mid] === key) {
          return mid;
      }
      if (array[mid] < key) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
}
