var express = require('express');
var router = express.Router();
const db = require('../services/db/db');
//const mysqlConnection = require('../services/db/dbConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spotify Song Guesser' });
});

router.get('/users', async function(req,res,next){
 /* var connection = mysql.createConnection({
    host:'localhost',
    database:'spotifysongguesser',
    user:"root",
    password:""
});
  connection.connect();
  
  connection.query("SELECT * FROM users as solution",(err,rows,fields)=>{
    if(err) throw err;
    //console.log(`The result of the query is ${rows[0]}`);
    res.send(rows);
  })

  connection.end();*/
  const result = await db.query("SELECT * FROM users");
  res.send(result);
})

router.post('/login', async (req,res)  => {
  let email = req.body.email;
  let password = req.body.password;
  let query = "SELECT * FROM users WHERE email=? AND password=?";
  let result = await db.query(query,[email,password]);
  console.log(result);
  res.send(result);

})

module.exports = router;
