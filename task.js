const fs=require("fs");
const readline=require("readline");
const { start } = require("repl");
const rl = readline.createInterface(process.stdin, process.stdout);

startProgram()   

function startProgram(){
  rl.question("Please choose from the following options:- \nType 1 to display the directory \nType 2 to add data in directory \nType 3 to Exit\n",(choice)=>{
    if (choice==1){
      display();
    }
    else if (choice==2){
      add();
    }
    else if (choice==3){
      exit();
    }
    
    else{
      console.log("\nPlease type a valid number.\n")
      startProgram();
    }
  })

}
 


// ADDING NAME AND ADDRESS
function add(){
  rl.question("what is your Name? ",(name)=>{
    console.log(name);
    rl.question("what is your Address? ",(address)=>{
      console.log(address);

      let data = {
        name: name,
        address: address,
      }
      let json = JSON.stringify(data,null,"\t");
      fs.appendFileSync("directory.json", json + ",\n", function (err) {
          if (err) throw err;
      });
      console.log("\nSUCCESS!\n");

      startProgram();

  })
})
}

// DISPLAYING THE DIRECTORY
function display(){
  const data = fs.readFileSync('directory.json',
            {encoding:'utf8', flag:'r'});
 
  console.log(data);
  startProgram();
  
}

// EXITING THE PROGRAM
function exit(){
  console.log("Thank you for using this program. Bye!")
  rl.close();
}
