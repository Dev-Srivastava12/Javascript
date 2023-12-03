// Immediately Invoked function expression

//used for db connection and  avoid polluting global namespace

// (() => {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
//   })();
  
//   // firstVariable and secondVariable will be discarded after the function is executed.


//Two iife in one file then ; is very important , otherwise it's given error
(function one(){
    console.log("hello");
})();

((name)=>{
    console.log(`Hi , This is ${name}`);
}) ("Dev");
