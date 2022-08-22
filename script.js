let a = prompt();

// 97341 -> 19734

let last = +a % 10;

a = ((+last * 100000 + +a) - +last) / 10;

console.log(a);   



