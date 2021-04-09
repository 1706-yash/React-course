var fs=require('fs')

//Reading data from a file
//parameters: name of file , format of content inside file, callback function
// fs.readFile('express.js','utf-8',function(err,data){
//     console.log(data);
// })

//Creating a file
//parameters: file name, content to be written
// fs.writeFile('write.js','console.log("Writing some data in file..")',function(err){
//     console.log("Data Wriiten into write.js");
// })

//Appending File
// fs.appendFile('write.js','Appending some data in file',function(err){
//     console.log("Data Appended to write.js");
// })

//Deleting a file
fs.unlink('write.js',function(err){
    console.log("File Deleted");
})