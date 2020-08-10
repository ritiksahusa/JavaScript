/*let - variable
const =Constant
var- ?? 
let vs var
local scope ad global scope
*/
let iAmGlobal ='someVal'
if(true){
    let iamLocal= 'somemore value' // local not allowed out side
    var localTry= 'var in scope'
    iAmGlobal='superman' // change val every where
    console.log(iamLocal);
    console.log(iAmGlobal);
}
// console.log(iamLocal);  error local variable
console.log(iAmGlobal);    
console.log(localTry);
