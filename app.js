const readline=require('readline');
const rd1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rd1.question("Please enter your name: ", (name)=>{
    console.log("You entered: "+name);
    rd1.close();
});
rd1.on('close',()=>{
    console.log("Interface is closed");
    process.exit(0);
})