const conn = require('./mongo_conn')
const Player = require('./models/Player')

/* 01] Add new Player in Record */
const addPlayer = async function(request, response, next){
    name = request.body.name
    age = request.body.age
    email = request.body.email
    wages = request.body.wages
    rating = request.body.rating
    price = request.body.price
    contract_till = request.body.contract_till
    console.log("In Post")
    console.log(request.body)
    player = Player.createPlayer(name, age, email, wages, rating, price, contract_till)
    console.log(player);
    await player.save((err,res)=>
    {
        if(err)
        {
            response.data={status:500,msg:"cannot Add this player"}                    
            console.log(err)
        }
        else{
            response.data={status:200,msg:" Player Added Successfully"} 
        }
        // console.log("Saved");
        next()
    })
}

/* 02] Get All Players */
const getPlayers = async function(request, res, next){ 
    const players = await Player.playerModel.find({}, {"_id": 0, "__v":0 })
    .then(function(items){        
        res.data ={status:200,payload:items}
        next()
    })
    .catch(function(err){
        res.data = {status:100,msg:err}
        console.log(err)
    })
}

/* 03] Get Player By Id */
const getPlayer = async function(request,res,next){
    var name = request.params.name

    const Players = await Player.playerModel.find({"name": name}, {"_id": 0, "__v":0 })
    .then(function(item){        
        // console.log(item);
        res.data ={status:200,payload:item}
        next()        
    })
    .catch(function(err){
        res.data ={status:100,msg: "Error Retriving Player"}
    })
}

/* 04] Update Player */
const updatePlayer = async function(request,response,next){

    rows_to_update = {}

    // request.body.name ? rows_to_update.name = request.body.name : null 
    request.body.age ? rows_to_update.age = request.body.age : null 
    request.body.wages ? rows_to_update.wages = request.body.wages : null 
    request.body.email ? rows_to_update.email = request.body.email : null 
    request.body.rating ? rows_to_update.rating = request.body.rating : null 
    request.body.price ? rows_to_update.price = request.body.price : null 
    request.body.contract_till ? rows_to_update.contract_till = request.body.contract_till : null 

    player_name = request.params.name
    // console.log(rows_to_update)
    await Player.playerModel.findOneAndUpdate(
            {"name": player_name }, rows_to_update, { new:false},
            (err,res)=>
            {
                if(err)
                {
                    response.data={status: 500,msg: "Error Updating Player"}
                    console.log(err)
                }
                else{
                    response.data = {status: 200,msg:" Player Updated  Successfully "+ player_name} 
                }
                next()
            })
}

/* 05] Remove Player in Record */
const deletePlayer = async function(request,res,next){
    const name = request.params.name
    await Player.playerModel.deleteOne({"name": name})
    .then(function(items){        
        res.data ={status:200,msg:" Player Deleted SuccessFully "}
        next()     
    })
    .catch(function(err){
        res.data ={status:500,msg:"Cannot Delete Player"}
        console.log(err);
    })
}


module.exports={
    addPlayer: addPlayer,
    getPlayers: getPlayers,
    getPlayer: getPlayer,
    deletePlayer: deletePlayer,
    updatePlayer: updatePlayer
}
