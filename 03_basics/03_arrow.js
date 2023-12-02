// const obj = {
//     username: "Dev",
//     email:"dev@gmail.com",
//     welcome:function(){
//         console.log(`${this.username},Welcome back!!`);
//         console.log(this);  //all properties of the parent obj(current context)
//     }
    
// }

// obj.welcome();
// obj.username="Sam";
// obj.welcome()
// //console.log(this);   //empty object but for browser same thing gives windows object as output(empty in node env)

// function one(){
//     username:"Dev"
//     console.log(this.username);  //returns undefined and works well in object
//     console.log(this)    //returns global object
// }

// const one = function(){
//     username:"Dev"
//     console.log(this); //same global object
//     console.log(this.username) //undefined
// }

// const one = ()=>{
//     username:"Dev",
//     console.log(this);    //gives empty object 
//     console.log(this.username); //undefined
// }

// one();

//basic syntax of arrow function
// const one = (num1,num2)=>{
//     return num1+num2
// }


const one = (num1,num2)=>num1+num2;

const two = (n1,n2)=>(n2-n1); //implicit return (used of paranthesis)

const obj = ()=>({username:"Dev"}); //implicit return by () 
console.log(obj());

