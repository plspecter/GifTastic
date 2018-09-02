
//Document begin
$(document).ready(function () {
console.log("loaded page")

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC" 
//API key?
// + "LADom26qErILrvxvUKoDrk3kmFT6jhiO"

var topics = ["Pepe", "Patrick", "Danny DeVito"]

//Ajax time
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
    console.log(response);
});

});