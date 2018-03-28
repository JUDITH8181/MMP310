// document ready event
$(document).ready(function(){

$('#query').on("keypress", function(event){
	if (event.which == 13) {
		var query = this.value;
		console.log(query);
	}
});
});
var key = "Pz6j8aMR9eGDYXXYBeh2QFlNZ8peiii6";
var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=20";
$.getJSON(url, function(json) {
	console.log(json);
});
for (let i = 0; i < json.data.length; i++) {
	const img = json.data[i];
	const imgElem = $('<img>')
		.attr('src', img.images.downsized.url);
	$('body').append(imgElem);
}