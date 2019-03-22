const mysql = require("../config/db");
function getHeadHunter(req, res) {
  mysql.query("SELECT * FROM headHunter", function(err, results) {
    if (err) throw err;
    console.log(results, "results");
    return res.send(results);
  });
}

function createHeadHunter(req, res) {
  mysql.query(
    "CREATE TABLE if not exists headHunter(id int primary key NOT NULL AUTO_INCREMENT, name varchar(255), email varchar(255), mobile int, noOfSE int, noOfQA int)",
    function(err, result) {
      if (err) throw err;
      mysql.query(
        "INSERT INTO headHunter (name, email, mobile, noOfSE, noOfQA) VALUES (?,?,?,?,?)",
        [
          req.body.name,
          req.body.email,
          req.body.phoneNo,
          req.body.noOfSE,
          req.body.noOfQA
        ],
        function(err, result) {
          if (err) throw err;
          return res.send({ success: true });
        }
      );
    }
  );
}

module.exports = {
  createHeadHunter,
  getHeadHunter
};
