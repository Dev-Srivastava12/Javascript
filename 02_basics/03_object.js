//Object.create()  object creation by constructor , and it creates singleton object.




//Now if we use symbol in object
let mysym =  Symbol("mykey")
let obj = {
    name:"Dev",
    Sec:"D",
    "first name":"fff",       //if we declare like this , then we have to access like obj["first 
    [mysym]:"mykey",    //use symbol like this                    //name"]
    Nickname:["Xyz","abc"],
    Email:"Dev@gmail.com"
}

// console.log(obj.name);
// console.log(obj["Sec"]);  // we can access obj like this also
// //console.log( obj.mysym);  //we can't access symbol key like this , the type of this is string
// console.log(obj[mysym]);   //we use like this 

obj.Email = "dev@ymail.com";
Object.freeze(obj);  //freeze the object can't make any change...
obj.Email="hgdhif"
console.log(obj);