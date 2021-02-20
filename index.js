
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('what is the password:',function(pass){

if (pass == 'The password you want'){
console.log('The secret you want');
}else{
    console.log('you got the password wrong');
}    
}); 
