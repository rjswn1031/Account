var express = require('express');
var router = express.Router();
//var member = require('../test.json');

//DB connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'admin',
  password: 'admin',
  database: 'account'
})

connection.connect(function(err) {
  if(err) {
    console.log('connection error');
    console.log(err);
    throw err;
  }
});

/* member목록 전체를 가져온다 */
router.get('/', function(req, res, next) {
  connection.query('select * from member', function(err, rows) {
    if(err) throw err;
    console.log(rows)
    res.send(rows);
  })
});

// 아이디와 비밀번호를 확인해 있으면 보낸다
router.get('/:id/:pass', function(req, res, next) {
    var id = req.params.id;
    var pass = req.params.pass;
    var memInfo = [];

    connection.query('select * from member where MEM_ID = "' + id + '" and MEM_PASS = "' + pass + '"', function(err, rows) {
      if(err) throw err;
      console.log(rows)
      res.send(rows);
    })

    // for(var i = 0; i < member.length; i++) {
    //   if(member[i].id == id && member[i].password == pass) {
    //     memInfo.push(member[i])
    //     break;
    //   }
    // }

});

module.exports = router;
