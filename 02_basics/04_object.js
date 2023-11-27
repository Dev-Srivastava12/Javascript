const obj = new Object();   //singleton object because it is created by constructor



obj.name="Dev"
obj.fullName={
    firstName:"Dev",
    lastName:"Srivastava"
}
obj.email="dev@gmail.com"

console.log(obj.fullName.firstName);

const a = {1:"a",2:"b"};
const b = {3:"c",4:"d"}

//const c = {a,b}  //two obj in one obj

// const c = Object.assign({},a,b);   //fill the a and b in empty object

const c = {...a,...b}   //spread operator same as array
console.log(c);

const users = [
    {
        id:1,
        name:"Dev"
    },
    {
        id:1,
        name:"Dev"
    },{
        id:1,
        name:"Dev"
    }
]

console.log(users[1].name)

console.log(obj);

console.log(Object.keys(obj));  //gives array of all the keys
console.log(Object.values(obj)); //gives array of all the values
console.log(Object.entries(obj)); //gives array in array

console.log(obj.hasOwnProperty("fullName")); //checks wheather key is present in object or not...

///object Destructuring

const {name} = obj

console.log(name); 



