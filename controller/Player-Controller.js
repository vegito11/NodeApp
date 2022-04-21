var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
player_api = require("../db/player-function");

var express = require('express');
var router = express.Router();

/* GET http://website.com/player/ */
router.get('/', player_api.getPlayers ,function(request, response)
{
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    if(response.data.status == 200)
	{
	    response.json({"players": response.data.payload})
	}            
	else
	{
	    response.json({"Message": response.data.payload})
	}  
})

/* GET http://website.com/player/ethun */
router.get('/:name', player_api.getPlayer , function(request, response)
{		
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    if(response.data.status == 200)
	{
	    response.json({"players": response.data.payload})
	}            
	else
	{
	    response.json({"Message": response.data.payload})
	}  
})


/* POST http://website.com/player/ */
router.post('/',bodyParser.json(), player_api.addPlayer , function(request, response)
{
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    if(response.data.status == 200)
    {
        response.json({"message": response.data.msg})
    }            
    else
    {
        response.json({"message": response.data.msg})
    } 
})

/* PUT http://website.com/player/ethun */
router.put('/:name',bodyParser.json(), player_api.updatePlayer , function(request, response)
{		
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With"); 
    if(response.data.status == 200)
    {
        response.json({"message": response.data.msg})
    }            
    else
    {
        response.json({"message": response.data.msg})
    }  
})

/* DELETE http://website.com/player/ethun */
router.delete('/:name',player_api.deletePlayer , function(request, response)
{		
    // console.log(res.data);
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");

    if(response.data.status == 200)
    {
        response.json({"message": response.data.msg})
    }            
    else
    {
        response.json({"message": response.data.msg})
    }  
})
module.exports = router