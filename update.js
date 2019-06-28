var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sample"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE employee1 SET name = 'rahman' WHERE name='Rahul1'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});