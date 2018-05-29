const express = require('express');
const router = express.Router();
var mysql = require('mysql');

//connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "simac"
});
router.route('/daftar-masjid')
	.get(function(req, res, data){
	const sql = "select nama_masjid, alamat from users";
	con.query(sql, function(err, result, fields){
		if(err) throw err;
		console.log(result);
	});
});

module.exports = router;