const mongoose = require('mongoose')

const mongo_server_url = process.env.MONGO_SERVER_URL ? process.env.MONGO_SERVER_URL : "localhost"
const mongo_port = process.env.MONGO_PORT ? process.env.MONGO_PORT : 27017
const DBNAME = "test"

mongoose.set('useFindAndModify', false);

createConnection = function()
{
    
	console.log("Connecting to Mongo DB ... ");
    mongoose.connect(
    		'mongodb://'+mongo_server_url+':'+mongo_port+'/'+DBNAME, 
        	{ 
        		useNewUrlParser: true, useUnifiedTopology:true
      		})
    		.then(()=> console.log("Connection Successfully"))
    		.catch((error)=>{
        		console.log(" Unable to Connect DB .. ");
        		console.log(error);        
    })
}


createConnection()

const conn = mongoose.connection;

// conn.on("connected",()=>console.log("Connected  Successfully !!!"))
conn.on("disconnected",()=> console.log(" Disconnected Database Connection"))
conn.on("error",()=> console.error.bind(console,' !! connection error !! '))

module.exports = conn 

