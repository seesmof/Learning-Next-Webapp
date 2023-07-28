const func = (obj) => {
  obj.make = "BMW";
};

const car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
};

console.log(car.make);
func(car);
console.log(car.make);
