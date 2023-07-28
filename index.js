const func = (arr) => {
  arr[0] = "Whaaaaaaaaat?";
};

const arr = [1, 2, 3, 4, 5, 45];

console.log(arr[0]);
func(arr);
console.log(arr[0]);
console.log(arr);
