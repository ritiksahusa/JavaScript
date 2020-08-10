/*
if (true){  //condition true-false

console.log( 'iam inside if block')
console.log("i am still inside the block")
} else if(false) {
    console.log("iam inside else bolock")
    console.log(" ")
}
else{
    console.log("MNOthce")
    console.log('')
}
*/
//LCO
var whoIsHere='user'
if (whoIsHere === 'user'){ // ==== vs ==
    console.log('Greeting message for user')
    console.log("Allow access to use all courses")
} else if(whoIsHere==='teacher'){
    console.log('Greeting message for Teachers')
    console.log("Allow access to use all courses")
} else {
    console.log('MESSAGE: please vrify your email')
    console.log('send email')
}

/*Grade problem
student marks:
10- Amazing 
5- Good
3-PerformanceObserver0-fail*/