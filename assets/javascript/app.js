
//Document begin
$(document).ready(function () {
    console.log("loaded page")

    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "LADom26qErILrvxvUKoDrk3kmFT6jhiO";
    // var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=LADom26qErILrvxvUKoDrk3kmFT6jhiO&limit=5");
    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC" + topic + "LADom26qErILrvxvUKoDrk3kmFT6jhiO"

    //API key
    // + "LADom26qErILrvxvUKoDrk3kmFT6jhiO"

    var topics = ["Pepe", "Patrick", "Danny DeVito"];

        //Ajax time
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                console.log(response);

                //Creates a div to hold the gif images
                var topicDiv = $("<div class ='topic'>");

                //Retreiving info about gifs related to that word
                var imgURL = response.gif;

                //Create an element to hold the image
                var image = $("<img>").attr("src", imgURL);

                topicDiv.append(image);


            });

    //we need to render these buttons

    function renderButtons() {

        //Empties after every form push
        $("#topic-view").empty();

        for (var i = 0; i < topics.length; i++) {

            //Makes the topics into buttons
            var button = $("<button>"); //Tried to style this with <button type="button" class="btn btn-outline-success">Success</button>
            //Add a class to define the topics are all doing the same thing
            button.addClass("topic");
            button.attr("data-name", topics[i]);
            //Set text on the page to whatever gif u type in
            button.text(topics[i]);

            $("#topic-view").append(button);
        }

    }

    $("#add-topic").on("click", function (event) {
        console.log("works");

        event.preventDefault();

        var topic = $("#topic-input").val().trim();

        topics.push(topic);

        // Write code to grab the text the user types into the input field
        // Write code to add the new topic into the movies array

        renderButtons();

    });

    renderButtons();


});