
//Document begin
$(document).ready(function () {
console.log("loaded page")

var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

var topics = ["Pepe", "Patrick", "Danny DeVito"]

//Ajax time
$.ajax({
url: queryURL,
method: "GET"
})

});