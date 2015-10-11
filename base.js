console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//create on thumbnail click full image appears in display to left
var image='';

$("#photoselector img").on('click', function(e){
	e.preventDefault();
	console.log(this);
	image= $(this).attr('src');


//$('#photodisplay').html(image);

$('#photodisplay img').attr('src', image);
});
	
$("#primarySubmit").on('submit', function(e){
	e.preventDefault();
	var submission = $("#userSubmit").val();
	console.log(submission);

});


//create on submit function on form, text drops below as done
// create a new form upon submit that will allow for comments

});
