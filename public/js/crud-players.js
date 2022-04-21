function view_player(name)
{
    var settings = {
        "url": api_server_url + "players/" + name ,
        "method": "GET",
        "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
        $('[name="vname"]').val(response.players[0].name)
        $('[name="vage"]').val(response.players[0].age)
        $('[name="vwages"]').val(response.players[0].wages)
        $('[name="vprice"]').val(response.players[0].price)
        $('[name="vrating"]').val(response.players[0].rating)
        $('[name="vcontract_till"]').val(response.players[0].contract_till)
        $('#Player_View_Modal').modal('toggle');
      }).fail(function(err) {
        alert("Cannot View Player "+err)
        });

    $('#Player_View_Modal').modal('toggle');
    
}

function delete_player(name)
{
    console.log(name);

    var settings = {
        "url": api_server_url + "players/" + name ,
        "method": "DELETE",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        location.reload()
      }).fail(function(err) {
            alert("Cannot Delete Player "+err)
        })
}

function edit_player(name)
{
    var settings = {
        "url": api_server_url + "players/" + name ,
        "method": "GET",
        "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
        $('[name="uname"]').val(response.players[0].name)
        $('[name="uage"]').val(response.players[0].age)
        $('[name="uwages"]').val(response.players[0].wages)
        $('[name="uprice"]').val(response.players[0].price)
        $('[name="urating"]').val(response.players[0].rating)
        $('[name="ucontract_till"]').val(response.players[0].contract_till)
        $('#Player_Update_Modal').modal('toggle');
      }).fail(function(err) {
        alert("Cannot Update Player "+err)
        });

    // $('#Player_Update_Modal').modal('show');
    // $('#Player_Update_Modal').modal('hide');
}

$(document).ready(function(){

    $('.update-btn').on('click', function(){
        console.log("In Modal Update")        
        update_player_info = {
            "age": $('[name="uage"]').val(),
            "wages": $('[name="uwages"]').val(),
            "rating": $('[name="urating"]').val(),
            "price": $('[name="uprice"]').val(),
            "contract_till": $('[name="ucontract_till"]').val(),
        }

        name = $('[name="uname"]').val()
        var settings = {
            "url": api_server_url + "players/" + name ,
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify(update_player_info),
          };
          
          $.ajax(settings).done(function (response) {
                console.log(response);
                $('#Player_Update_Modal').modal('toggle');
                // alert("Player Updated Successfully")
                location.reload();
            }).fail(function(err) {
                  alert("Cannot Update Player "+err)
               });
    }); 
  });