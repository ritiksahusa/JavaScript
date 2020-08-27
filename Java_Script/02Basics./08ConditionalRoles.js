// roles
//  admin -full access
// subadmin - gets access to create / delete course
//testprep - get access to create / delete tests
// user - get access to content

//note: switch se could be a better option if you 
//want to check for discrete conditions


// fall through : if you dont use break , 
//if once condition satisfies it will execute all others...

var user = "admin";
 switch(user){
     case "admin":
         console.log(" full access");
         break;
    case "testprep":
        console.log("create/ delete test");
        break;
    case "subadmin":
        console.log("creade/delete courses");
        break;
    case "user":
        console.log("consume the content");
        break;

    default:
        console.log("can have trial");
        break;
    
 }

