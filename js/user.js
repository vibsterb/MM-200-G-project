const express = require('express')
const router = express.Router();
const db = require("./db.js");

//hente alle brukere fra databasen
router.get('/app/allUsers',async function(req,res,next){
  let sql = 'SELECT * FROM public."Users";';

  try {
    let users = await db.runQuery(sql);
    console.log('innhold fra select-query i users.js: ' + JSON.stringify(users));
    res.status(200).json(JSON.stringify(users));
    //må ha enten next() eller end() ???
  }

  catch(err) {
    res.status(500).json({error: err});
  }
});

//opprette ny bruker i databasen
router.post('/app/user', async function(req,res,next){
  /// todo password-hashing
  let userName = req.body.name;
  let userEmail = req.body.email;
  let userPsw = req.body.password;

  console.log(req.body);

  /// todo serial id/another  (select max(id) from Users)
  /// todo role
  let sql =  `insert into public."Users" ("id", "email", "name", "password")
   values(4, '${userEmail}', '${userName}', '${userPsw}')
   returning "id", "email", "name", "password";`;

  try {
    let data = await db.runQuery(sql);
    res.status(200).json(data); //hvorfor er dette et array?
  }

  catch(err) {
    res.status(500).json({error: err});
  }
});

router.post('/app/deleteUser', async function(req, res, next){

  let id = req.body.id;
  console.log(req.body);

  ///todo returnere noe?
  let sql = `delete from public."Users" where id = '${id}';`;

  try {
    let data = await db.runQuery(sql);
    res.status(200).json(data);
  }

  catch(err) {
    res.status(500).json({error: err});
  }

});

module.exports = router;
