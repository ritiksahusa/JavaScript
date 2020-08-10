//&&  - AND
//|| - OR
// ! reverse of boolean ops

let isVerified=true
let isLoggedIn= true
let hasPayment =true
let isGuest=true

if(isVerified && isLoggedIn &&hasPayment){
    console.log('Greeting')
    console.log('Grant access' )
}
else if(isVerified||isGuest){
    console.log("Allow")
}
else{
    console.log(z)
}

