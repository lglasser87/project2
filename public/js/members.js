$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
    });
  });

  //Once logged in, user gets to start game, choose character, or update settings (options)
  //Start 
  //Character
  //Options