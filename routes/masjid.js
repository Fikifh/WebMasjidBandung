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
router.route('/beranda')
	.get(function(req, res){
    res.render('home', {
        title: "Sistem Informasi Mesjid Cibiru"
    });
});
router.route('/sign-up')
	.get(function(req, res){
	res.render('sign-up', { title: 'Sign Up | SIMAC' })})
	.post(function(req, res){
		var input = JSON.parse(JSON.stringify(req.body));
		const request = input.username;
		console.log(request);		
		const idMasjid = input.id_masjid;
		const nama_masjid=input.nama_masjid;
		const email=input.email;
		const username=input.username;
		const password=input.password;
		const no_telpon=input.no_telpon;		
		var sql= 'INSERT INTO masjid set ?';
		con.query(sql, input, function(err, result, fields){
			if(err){
				console.log(err);
			}
			res.redirect('/home/masjid/sign-up');
			console.log(result);
		});
	});

module.exports = router;