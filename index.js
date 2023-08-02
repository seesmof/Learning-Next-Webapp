const fac = (n) => (n < 2 ? 1 : n * fac(n - 1));
console.log(fac(5));
