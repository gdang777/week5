function sumItems(array) {
  let sum = 0;
  array.forEach((number) => {
    if(Array.isArray(number)){
      sum += sumItems(number);
    } else {
    sum += number;
    }
  });
  return sum;
}
const numArray = [1, [2, 3, 4], 5];
console.log(sumItems(numArray));
module.exports = sumItems;