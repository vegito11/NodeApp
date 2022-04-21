// var api_server_url = "http://localhost:3000/"
// console.log(document.location.origin+"/");
var api_server_url = document.location.protocol + "//" + document.location.hostname +":" +  document.location.port +"/"

$(document).ready(function(){
    $('.add-btn').on('click', function(){
        
        var name = $('[name="name"]').val();
        
        if(!$('[name="email"]').val() || !$('[name="name"]').val())
        {
          console.log("No Email Provided");
          return false;
        }
        

        player_info = {
            "name": $('[name="name"]').val().trim(),
            "email": $('[name="email"]').val(),
            "age": $('[name="age"]').val(),
            "wages": $('[name="wages"]').val(),
            "rating": $('[name="rating"]').val(),
            "price": $('[name="price"]').val(),
            "contract_till": $('[name="contract_till"]').val(),
        }
        // console.log(player_info);       
        var settings = {
            "url": api_server_url + "players",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(player_info),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            alert("Player Added Successfully")
            location.reload();
        }).fail(function(err) {
            alert("Cannot add Player "+err)
            });
    }); 
  });