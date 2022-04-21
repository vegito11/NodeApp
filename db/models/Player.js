var mongoose = require('mongoose')

/* 01] Create Schema For player Table */
var playerSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    email: String,
    wages: Number,
    rating: Number,
    price: Number,
    contract_till: String
})

/* 02] Create Model */
const Player = mongoose.model('player',playerSchema)


/* 03] Create player Object */
const createPlayer = (fname, age, email, wages, rating, price, contract_till)=>
{
    player_ob = new Player({name: fname,
            age: age,
            email: email,
            wages: wages,
            rating: rating,
            price: price,
            contract_till: contract_till,
        });
    return player_ob
}

module.exports={
    playerModel: Player,
    createPlayer:createPlayer
}