var name ='ritik';

console.log("Line No. 3",name);

function sayName() {
    //var name='sahu';
    console.log("Line number 6", name);
    sayNameTwo();
    function sayNameTwo() {
       // var name ="Mr RS"
        console.log("line nop. 10",name);        
    }

    
}
sayName();