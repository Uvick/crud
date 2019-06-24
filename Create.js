var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "mydb"
});
con.connect(function(err) {
	if(err) throw err;
	console.log("Connected!");
	var sql = "Create Table employee (name varchar(255), role varchar(255))";
	con.query(sql, function(err, result) {
	if(err) throw err;
	console.log("Table created");
	});
});

