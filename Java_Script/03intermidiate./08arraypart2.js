//function isEven(elem) {  // normal function declaretion 

//var isEven = function (elem){ //variable format declaretion

var isEven =(elem) =>{ //arrow function declaretion
    // if(elem%2===0){
    //     return true;       
    // } 
    // return false;
    return elem%2===0;
}

// console.log(isEven(56));
 /*
 call back function no name but super helpful in some function
 */
// var result= [2, 4, 8,6, 10].every(isEven);  
//  //do isEven opreation with each elem and rersult and op of it  
// console.log(result);



// var result= [2, 3, 8,6, 10].every((e) => {
//     return e%2 ===0;
// }
// );  

 //       OR
 var result= [2, 3, 8,6, 10].every((e) =>  e%2 ===0);  
console.log(result);
/* 
        elem expression to be evluated... 
.every( ()=> {})//use return inside
.every( ()=> {})//dont wana use return inside
*/
        
