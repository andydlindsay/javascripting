// variable declaration
var numbers = [1,2,3,4,5,6,7,8,9,10],
    filtered;

// filter the numbers array
filtered = numbers.filter(function(number) {
  return number % 2 === 0;
});

// output filtered to the console
console.log(filtered);
