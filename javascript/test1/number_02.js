// const num = 42;
// const float = 42.42;
// const pow = 10e3;

// console.log(num);
// console.log(float);
// console.log(pow);

// console.log("MAX_SAFE_INTEGER =", Number.MAX_SAFE_INTEGER);
// console.log("Pow 53", Math.pow(2, 53) - 2);
// console.log("MIN_SAFE_INTEGER =", Number.MIN_SAFE_INTEGER);
// console.log("MAX_VALUE", Number.MAX_VALUE);
// console.log("MIN_VALUE", Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log("1/0", 1 / 0);
// console.log("not a number", Number.NaN);
// console.log("typeof NaN =", typeof NaN);
// const weird = 2 / undefined;
// console.log("2/undefined =", weird);
// console.log(Number.isNaN(weird));
// console.log(Number.isNaN(42));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(42));

// const stringInt = "40";
// const stringFloat = "40.42";
// console.log(Number.parseInt(stringInt) + 2);
// console.log(parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);

// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);

// console.log(0.4 + 0.2);
// console.log(2 / 5 + 1 / 5);
// console.log(+(0.4 + 0.2).toFixed(1));
// console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// console.log(9007199254740991999999n - 900719925474099199999n);
// console.log(-900719925474099199999n);
// console.log(9007199254740991999999.123n); // error

// console.log(10n - 4); // error
// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));
// console.log(5n / 2n);

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.sqrt(25));
// console.log(Math.pow(5, 3));
// console.log(Math.abs(-42));
// console.log(Math.max(42, 12, 23, 11, 422));
// console.log(Math.min(42, 12, 23, 11, 422));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.round(4.9));
// console.log(Math.trunc(4.9));
// console.log(Math.sin(4.9));
// console.log(Math.random());

function getRandimBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandimBetween(10, 42));
