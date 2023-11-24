// const score = 400;

// const num = new Number(100);
// console.log(score); //400
// console.log(num);   //[Number:100]

// const val = 100.2345
//console.log(val.toFixed(2));

// const val=1000000
// console.log(val.toLocaleString('en-IN'));

// const val = 23.8999
// console.log(val.toPrecision(3));

//********Math****/

// console.log(Math);

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min+1 )) + min)   //max-min only gives value to 10-19 
                                                                  //but for 20 we add 1 in max-min