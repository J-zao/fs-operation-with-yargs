/*
const fs = require("fs"); //importing the fs module to access file


fs.writeFileSync('./salary.txt', "David,Male,200000,NJ")

fs.readFile('./employee.txt', function(err, data){

    if(err){
        console.log("Error while reading the file")
        return;
    }else{
        console.log("Data is: \n ", data.toString());
    }
    
} )

*/

var path = require('path');
var p = 'C:\Users\Fozao\FULLSTACK MASTER PROGRAM\NODEJS\Day1\fs folder\salary.txt'
console.log(path.dirname(p));
console.log(path.basename(p));
console.log(path.extname(p));
console.log(path.isAbsolute(p));