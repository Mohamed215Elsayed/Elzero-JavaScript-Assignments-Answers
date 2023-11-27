
let a = 21;
let b = 20;
let c = `_${b}${a}`;
console.log(`_${a}${c.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_
/***************/
let underscore = "_";
let concat1 =underscore + a.toString()+ underscore;//_21_
let x= b.toString() + a.toString() + underscore;
let concat2 = concat1 + x;
let concat3 = concat2 + x;//21_2120_2120_
let concat4 = concat3 +x;//21_2120_2120_2120_
let concat5 = concat4 + b.toString() + underscore;
console.log(concat5);