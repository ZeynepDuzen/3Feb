var http = require('http'); //http modülü oluşturdum

var currentDate = require('./mymodule'); // curDate fonksiyonunu hello.js dosyası ile bağladım ve 
                                     // currentDate modülü oluşturdum

var upper = require('upper-case');
//import upper from "upper-case"; 




//console.log(currentDate.curDate());

http.createServer(function(req,res){    // I created a default server on my computer
    res.writeHead(200,{'Content-Type' : 'text/html'}); //hello node js ifadesini karşı tarafa başarılı bir şekilde gönderdiğimizi gösteren status code
    res.write(upper.upperCase(req.url));
    //res.write('Hello Node Js :)')        
    //res.write('Current Date is' + currentDate.curDate());
    res.end();                          
}).listen(8080);                 //8080=localhost --> localhost üzerinden server'a ulaşılır
                                 //localhost:8080 --> benim bilgisayarımı temsil eder                                        
  
                                            



