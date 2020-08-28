/*
Function to answer user role
admin-all access
sub admin- all access wih course
test- all access with tests
user - cosume all content
other - give trial
Input: getUserRole(name ,role);
*/
// type 1 declaration
// function getUserRole(name , role){
//     switch (role) {
//         case 'admin':
//             return `${name} is admin with all axccess`
//             break;
//         case 'subadmin':
//             return `${name} is subadmin access to all course modefication`
//             break;
        
//         case 'testprep':
//             //return '${name} is user access to all material'
//              return `${name} is test prep access to all test modefication`
//              break;
//         case 'user':
//             return `${name} is user access to all course modification`
//             break;    
//         default: 
//             return  `${name} is tearUser raccess trial version`
//             break;
//     }

// }
// type 2 declaration (addiging var name to function)
var getUserRole=function (name , role){
    switch (role) {
        case 'admin':
            return `${name} is admin with all access`
            break;
        case 'subadmin':
            return `${name} is subadmin access to all course modefication`
            break;
        
        case 'testprep':
            //return '${name} is user access to all material'
             return `${name} is test prep access to all test modefication`
             break;
        case 'user':
            return `${name} is user access to all course modification`
            break;    
        default: 
            return  `${name} is tearUser raccess trial version`
            break;
    }

}
//console.log(getUserRole('ritik' , 'admin'));
getUserRole('sadeep','user');
console.log(getUserRole);