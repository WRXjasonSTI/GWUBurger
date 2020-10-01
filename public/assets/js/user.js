$(function () {
  $(".burger-form").on("submit", function (event) {
    event.preventDefault();

    var burger = {
      name: $("#burger-input").val().trim(),
    };

    // Send post to the back end
    $.ajax("/api/burger", {
      type: "POST",
      data: burger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".devour-button").on("click", function (event) {
    var id = $(this).attr("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(function () {
      console.log("devoured burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
