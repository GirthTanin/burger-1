$(document).on("click", '#devour', function (event){
    event.preventDefault();
    var burgerID = $(this).attr("data-id");
        $.ajax({
            url: "/burgers/devour/"+ burgerID, 
            method: "PUT"
        }).then(function (results){
            location.reload();
        })
});

$(document).on("click", '#add', function (event) {
    event.preventDefault();
    var newBurger = {
        name: $("#newBurger").val().trim(),
        devoured: 0
    };
    $.ajax({
        url: "/burgers/add",
        method: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });