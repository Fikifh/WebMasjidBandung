'use strict';

const Sequelize = require('sequelize');
const { mysql } = require('../../config/db');

const usersSchema = {
  id_masjid: Sequelize.STRING,
  nama_lengkap: Sequelize.STRING,
  email :equelize.STRING,
  username : equelize.STRING,
  password : equelize.STRING,
  no_telpon : equelize.STRING
};

const users = mysql.define('users', usersSchema);
module.exports = users;