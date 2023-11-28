// let a = 10;
// const b= 20;
// var c = 30;

if(true){
   let a  =10;
   const b = 20;
   var c = 30;
}

console.log(a);    //gives error as the scope of let is block scope so it can not be accessed  
                   //outside if
console.log(b);    //Same reason for const 
console.log(c);    //this will not give error as var has global scope but the problem is that var can be reinitialized so it arises problem that's why it's not advisable to use var