// const athletics=require('./athletics')
// athletics.relay();
// console.log(athletics.add(3,4));

var http=require('http')
// request,response
http.createServer(function(req,resp){  
   resp.writeHead(200,{"Content-Type":"text/plain"}); 
   resp.write("Hello world! this is from Http");
   resp.write("New Text");
   resp.end();
//    if you dint write resp.end() then it will not display content

}).listen(8888);
