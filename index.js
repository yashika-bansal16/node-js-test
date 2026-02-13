// const http = require('http');

//  const myServer = http.createServer((req,res)=>{
//      if(req.url == '/'){
//          res.end('ABES Engineering College');
//     }
//     else if(req.url == '/about'){
//          res.writeHead(200,{'Content-Type':'text/html'});
//          res.end('<img src="https://college4u.in/wp-content/uploads/2018/03/abes.png"></img>');
//      }
//      else if(req.url == '/contact'){
//          res.end('1234567890');
//     }
//     else{
//         res.end('404 Page Not Found');
//     }
// })

//  myServer.listen(8000,() => console.log('Server is running'));
const fs = require('fs');
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
    else{
        console.log('File read successfully');
    }
    console.log(data);
});
fs.appendFile('myfile.txt',' Welcome to Node.js',(err)=>{
    if(err) throw err;
    console.log('File appended successfully');
});