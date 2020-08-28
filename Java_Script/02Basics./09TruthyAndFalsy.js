// TODO: falsy - any data consist of below values shows falsy
//  undefined, null,0,"",nan
/*
== : loose comparision here 2=="2" :true
===: tight comaprision here 2==="2":false
*/
var user="2";
if(user){
    console.log("condition is true");
}
if(2==user){
    console.log(true);
}
2===user ? console.log(true) :console.log(false);

