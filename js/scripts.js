$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const dob = $("#born").val();
    const favoriteFood = $("#food").val();
    const favoriteMusic = $("input:radio[name=music]:checked").val();

    const favoriteColor = $("#color").val();
    $("#outputName").text("your name is " + firstName + " "+ lastName + "your DOB is: " + dob + ". Your favorite food is: " + favoriteFood + ". Your favorite music is: " + favoriteMusic + ". Your favorite color is: " + favoriteColor);
  });
});