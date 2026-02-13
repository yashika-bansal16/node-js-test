
const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    res.end("Hello from server");
});

myServer.listen(8000, () => {
    console.log('Server is running');
});

fs.writeFile('myfile.txt','Hello World',(err)=>{
    if(err) throw err;
    console.log('File created successfully');
});

fs.writeFile('myfile.txt','Hello Node.js',(err)=>{
    if(err) throw err;
    console.log('File updated successfully');
});

fs.readFile('myfile.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log('File read successfully');
    console.log(data);
});

fs.appendFile('myfile.txt',' Welcome to Node.js',(err)=>{
    if(err) throw err;
    console.log('File appended successfully');
});

fs.cpSync('myfile.txt','myfile_copy.txt');

fs.rename('myfile_copy.txt','myfile_renamed.txt',(err)=>{
    if(err) throw err;
    console.log('File renamed successfully');
});
fs.unlink('myfile_renamed.txt',(err)=>{
    if(err) throw err;
    console.log('File deleted successfully');
});
