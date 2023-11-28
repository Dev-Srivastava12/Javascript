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

function one(){
   const username = "hitesh"

   function two(){
       const website = "youtube"
       console.log(username);    //can access as it has global scope for two
   }
   // console.log(website);  //can't access website because the scope is different

    two()

}

// one()

if (true) {
   const username = "hitesh"
   if (username === "hitesh") {
       const website = " youtube"
       // console.log(username + website);
   }
   // console.log(website); //gives error
}

// console.log(username); //gives error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   //gives result due to hoisting , when function is declared it can be called 
                         //before declaration

function addone(num){
    return num + 1
}



addTwo(5)   //gives error hoisting is not when function is declared as expression
const addTwo = function(num){
    return num + 2
}
