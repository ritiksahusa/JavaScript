var countries= ["India","USA","Japan"];
var states= new Array("Rajasthan","Delhi","Assam","Maharastra")
// console.log(states);
// console.log(states[0]);

// console.log(states.length);//length
states[0]="Punjab";

var user=["Ritik","ritik@gmail.com",3,34,true];
console.log(user);
// user.pop();
// user.pop();
user.unshift("new elem");
// console.log(user);
 user.shift();

// console.log(user);

console.log(user.indexOf(3));//index of elem 3
console.log(user.indexOf("Ritik"));
console.log(user.indexOf("newyy"));//will return -1 if elem is not there\

console.log(Array.from("ritik"));// arrays docx
