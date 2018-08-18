console.log("this is a test");

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
    console.log("add burger button works");
    var newBurger = {
        name: $("#newBurger").val().trim(),
        devoured: 0
    };
    // console.log("new burger from script page: " + newBurger);
    console.log("new burger name: " + newBurger.name);

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
         

    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

  