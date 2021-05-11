var express = require('express');
var router = express.Router();
var member = require('../test.json');

/* member목록 전체를 가져온다 */
router.get('/', function(req, res, next) {
  res.send(member);
});

// 아이디와 비밀번호를 확인해 있으면 보낸다
router.get('/:id/:pass', function(req, res, next) {
    var id = req.params.id;
    var pass = req.params.pass;
    var memInfo = [];

    for(var i = 0; i < member.length; i++) {
      if(member[i].id == id && member[i].password == pass) {
        memInfo.push(member[i])
        break;
      }
    }

    res.send(memInfo);
});

module.exports = router;
