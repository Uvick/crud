var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from employee where role = 'sde'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
