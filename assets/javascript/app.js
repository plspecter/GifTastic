
//Document begin
$(document).ready(function () {
    console.log("loaded page")

    var topics = [];

    // topics.addClass("id", "buttons")

    $("#buttons").on("click", function () {

        //It checks this(buttons) and attaches the data person attribute from the html
        //person now holds what person is in data-person 
        // var person = $(this).attr("data-person");
        // var person = $(this).text();
        var person = $(this).text();
        console.log(person);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=LADom26qErILrvxvUKoDrk3kmFT6jhiO";

        //Ajax time
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            //Go through the nodes objects and arrays in the console
            for (var i = 0; i < results.length; i++) {

           //Go through the console web to see where  the image is nested
            var imageUrl = results[i].images.fixed_height_still.url;
            console.log(imageUrl);
            //Creates a div to hold the gif images
            var topicDiv = $("<img>");

            //Retreiving info about gifs related to that word
        

            //Create an element to hold the image
            // var topicDiv = $("<img>").attr("src", imageUrl);

            //Grabs the first image the URL source finds
            // console.log(response.data);
            console.log(imageUrl);
            topicDiv.attr("src", imageUrl);
            topicDiv.attr("alt", "gif img")

            //Calls on the images ID at the top
            $("#images").append(topicDiv);
            // topicDiv.append(image);

            }

        });

    });

    //When you click the buttons
   
    //we need to render these buttons

    function renderButtons() {

        for (var i = 0; i < topics.length; i++) {

        //Empties after every form push
        $("#topic-view").empty();

        //Makes the person into buttons
        var button = $("<button>"); //Tried to style this with <button type="button" class="btn btn-outline-success">Success</button>
        //Add a class to define the topics are all doing the same thing
        button.addClass("topic");
        button.attr("data-name", topics[i]);
        //Set text on the page to whatever gif u type in
        button.text(topics);

        $("#topic-view").append(button);
        }
    }


//When you click on ADD
    $("#add-topic").on("click", function (event) {
        console.log("works");

    

        event.preventDefault();
        

        var topic = $("#topic-input").val().trim();

        topics.push(topic);

        // Write code to grab the text the user types into the input field
        // Write code to add the new topic into the movies array

        renderButtons();

        //Make the new button gifs show up
        for (var i = 0; i < results.length; i++) {
            var newTopic = results[i].images.fixed_height_still.url;
            console.log(newTopic);

             //Creates a div to hold the new gif images
             var newtopicDiv = $("<img>");

            //Attach the same properties as the original buttons
             newtopicDiv.attr("src", imageUrl);
             newtopicDiv.attr("alt", "gif img")

            //Calls on the images ID at the top
            $("#images").append(newtopicDiv);
 
  
          }

        

    });


    renderButtons();


});

