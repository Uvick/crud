var mysql = require('mysql');
//hello be good

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password:"root",
	database:"sample"
});
con.connect(function(err){
			if(err) throw err;
var sql = "DELETE FROM employee1 Where name = 'rahul1'";
con.query(sql, function(err, result) {
	if(err) throw err;
	console.log("Number of records deleted:"+result.affectedRows);
});
});