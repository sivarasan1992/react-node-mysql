const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("./config/db");
const routes = require('./routes');
const port = process.env.PORT || 4001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
// app.get("/api/fetchPeopleRecords", (req, res) => {
//   mysql.query("SELECT * FROM headHunter", function(err, results) {
//     if (err) throw err;
//     res.send(results);
//   });
// });
// app.post("/api/createHeadHunter", (req, res) => {
//   mysql.query(
//     "CREATE TABLE if not exists headHunter(id int primary key NOT NULL AUTO_INCREMENT, name varchar(255), email varchar(255), mobile int, noOfSE int, noOfQA int)",
//     function(err, result) {
//       if (err) throw err;
//       mysql.query(
//         "INSERT INTO headHunter (name, email, mobile, noOfSE, noOfQA) VALUES (?,?,?,?,?)",
//         [
//           req.body.name,
//           req.body.email,
//           req.body.phoneNo,
//           req.body.noOfSE,
//           req.body.noOfQA
//         ],
//         function(err, result) {
//           if (err) throw err;
//           res.send({ success: true });
//         }
//       );
//     }
//   );
// });
app.listen(port, () => console.log(`app running on port ${port}`));
