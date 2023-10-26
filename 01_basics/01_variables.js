const accountId  = 14453;
let accountEmail = "abc@gmail.com"
var accountPass = "12345"
accountCity = "Agra"
let accountState; //it is initialized as undefined

//accountId=2  not allowed as accountId is const , it can't be reasigned


/*
Don't use var due to it's block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])