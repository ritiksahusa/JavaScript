//Global Context

// sayHello(); // this will work     

// function sayHello() {
//     console.log("this is real context");
// }

/* from above we can see call can be before declaration;*/
// this is because there is something called context  which stores 
//function and variable  during compile time..~ my guess**(when i am learning)

if(2==='2'){
    console.log("this is true");
}
var myName='hitesh';
if(myName===context.myName){
    console.log("This is again true");
}