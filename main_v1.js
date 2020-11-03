// load libraries
const express = require('express')
const handlebars = require('express-handlebars')
const mysql = require('mysql2/promise')

//configure PORT
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

//configure connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || 3306),
    database: process.env.DB_NAME || 'tv',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 4,
    timezone: '+8:00'
})

//SQL
const SQL_GET