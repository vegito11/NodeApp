var express = require('express')
var bodyparser = require('body-parser')
var player_controller = require('./controller/Player-Controller')
player_api = require("./db/player-function");
var cors = require('cors')

server_port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3000

var app = express()
// const router = app.Router()
// Set Up Template Engine
app.set('view engine','ejs')

// static files
/*
	localhost:3000/assests/style.css
	It will search this file in public/assests/style.css
	----------------
	else to like this	
	app.use('/assests',express.static('./public'))
*/
app.use(express.static('./public'))


//  listen port by default 3000
app.listen(server_port, "0.0.0.0")
app.options("*", cors())

app.get('/',function(req,res)
{
	res.render('index');
})

app.use('/players', player_controller)

console.log('Server is Listening On Port '+ server_port);

module.exports = app