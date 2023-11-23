let number = null;

let num = Number(number);
//console.log(typeof num);
//console.log(num);

//"33"=>33
//"33abc" => NaN(type of NaN is number)
//null => 0
//undefined => NaN

let bool = undefined;

let isValue = Boolean(bool);
//console.log(typeof isValue);
//console.log(isValue);

//1=>true 0=>false any number=>true
//""=>false  "anystring"=>true
//null=>false
//undefined=>false

let str = undefined;

let str1 = String(str);
// console.log(typeof str1);
// console.log(str1);

//33=>"33"
//null=>null
//undefined=>undefined


//****operations****//
// console.log(2+"2") //22
// console.log("2"+ ++2);  //error
//console.log(++2 + "2") //error

console.log("1"+2+3) //123  pehele string ho toh sab string
console.log(2+3+"1") //51   baad mein string ho toh pehele operations 
console.log(1+"2"+3) //123
console.log(""+0) // 0 