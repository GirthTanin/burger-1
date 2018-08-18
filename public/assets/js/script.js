console.log("this is a test");

$(document).on("click", '#devour', function (event){
    event.preventDefault();
    var burgerID = $(this).attr("data-id");
        $.ajax({
            url: "/burgers/api/"+ burgerID, 
            method: "PUT"
        }).then(function (results){
            location.reload();
        })
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

  