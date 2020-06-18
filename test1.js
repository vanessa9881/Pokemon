/* var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "interstellar"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

*/

var http = require('http');
var fs = require('fs');
function onRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./test.html' , null , function(error,data)
  {if(error){
    res.writeHead(404);
    res.write('File not Found');}
    else{
      res.write(data);
    }
    res.end();
  });
}
http.createServer(onRequest).listen(8080);
