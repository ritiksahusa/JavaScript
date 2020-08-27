//user is only allowed to purchase when:
//logged in
// email verified
//cardInfo-- valid
//if any one is missing, stop purchase

//&&
//||

var isLoggined=true;
var isCardValid=true;
var isemailverified=true;

if(isCardValid && isLoggined && isemailverified){
    console.log("Allowed to access");
}