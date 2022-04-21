$(document).ready(function(){
    var settings = {
        "url": api_server_url + "players",
        "method": "GET",
        "timeout": 0,
        "crossDomain": true,
        "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        }
    };
        
        $.ajax(settings).done(function (response) {
            for (let index = 0; index < response.players.length; index++) {
                const player = response.players[index];
                $("tbody").append("<tr>")
                $("tbody").append("<td>"+ player.name +"</td>")
                $("tbody").append("<td>"+ player.email +"</td>")
                $("tbody").append("<td>"+ player.price +" € </td>")
                $("tbody").append("<td>"+ player.contract_till +"</td>")

                $("tbody").append(`<td> <i class="fa fa-eye" onclick="view_player('${player.name}')"></td>`)
                $("tbody").append(`<td> <i class="fa fa-edit" onclick="edit_player('${player.name}')"></td>`)
                $("tbody").append(`<td> <i class="fa fa-trash" onclick="delete_player('${player.name}')"></td>`)
                $("tbody").append("</tr>")
            }
        }).fail(function(err) {
        alert("Cannot Get Players "+err)});
});