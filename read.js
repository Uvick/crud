var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sample"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from employee1 where role = 'scientist'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
