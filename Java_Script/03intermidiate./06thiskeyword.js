//TODO: part1 for this keyword
console.log(this);//give empty case
//this give access to global context


var game = "basketball";

function sayName(){
    var name="Ritik"
    console.log(this);
}
sayName();