
//Document begin
$(document).ready(function () {
console.log("loaded page")

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC" 
//API key?
// + "LADom26qErILrvxvUKoDrk3kmFT6jhiO"

var topics = ["Pepe", "Patrick", "Danny DeVito"]

//we need to render these buttons

function renderButtons() {

    for (var i = 0; i < topics.length; i++); {
        //Makes the topics into buttons
        var a = $("<button>");
        //Add a class to define the topics
        a.addClass("topic")
        //Set text on the page to whatever gif u type in
        a.text(topics[i])
    }
    
}

//Ajax time
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
    console.log(response);
});

});