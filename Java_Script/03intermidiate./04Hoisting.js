tipper(55);/// this will work / (Function definition are scanned and made avalible )
function tipper(a){
    var bill=parseInt(a);
    console.log(bill + 5);
}


///bigTipper("200"); // this will not work
// (variable defination are scanned and made undefined)

 var bigTipper =function (a){
    var bill= parseInt(a);
    console.log(bill+15);
}
bigTipper("200");


console.log(name);//work but  name is un defined 
//(variable defination are scanned and made undefined)
var name ='ritik';

function sayName() {
    var name ="MR. H"
    console.log(name);
    
}

sayName();

console.log(name);
