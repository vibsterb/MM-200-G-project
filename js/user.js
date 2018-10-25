
  var express = require('express')
  var router = express.Router();
  var db = require("./db.js");

  router.get('/app/allUsers', function(req,res,next){
      let query = "Select * from Users";
      try{
        let users = db.select(query); console.log('innhold fra select-query i users.js: ' + users);
          res.status(200).json(JSON.parse(users));
        }

      catch(err) {
          res.status(500).json({error: err});
      }
  });

  module.exports = router;
