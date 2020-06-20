//Source code used for reference
/***************************************************************************************
*    Title: <Node, Express & MongoDB: Button click example>
*    Author: <aeerity>
*    Availability: <https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35>
***************************************************************************************/


console.log('Server-side code running');
var mysql = require('mysql');
var bodyParser = require('body-parser');

const express = require('express');
const app = express();
const pokemon = require('pokemontcgsdk')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "interstellar",
  database: "backup2"
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static('public'));

con.connect(function(err) {
  if(err) {
    return console.log(err);
  }
  app.listen(8080, () => {
    console.log('listening on 8080');
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/clicked', (req, res) => {

  console.log("passed");

  var sql = "INSERT INTO cards (id,name,npn,hp,rarity,setname,setCode) VALUES ? "

  pokemon.card.all({setCode: 'det1'})
.on('data',function(card) {
  console.log(card.name);

    var name = [card.name]
    var npn = [card.nationalPokedexNumber]
    var id = [card.id]
    var hp = [card.hp]
    var rarity = [card.rarity]
    var set = [card.set]
    var setCode = [card.setCode]

    var whole = id.concat(name,npn,hp,rarity,set,setCode);
    con.query(sql,[[whole]],function(err,re) {
      if(err) throw(err);


      console.log("record inserted");
    });

});

var sql = "INSERT INTO cards (id,name,npn,hp,rarity,setname,setCode) VALUES ? "


console.log("passed");

});

app.post('/clicked2', function(req, res) {
console.log(req.body);


});
