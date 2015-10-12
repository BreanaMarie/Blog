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
	
//gets the content submitted by primary user
$("#primarySubmit").on('submit', function(e){
	e.preventDefault();
	var submission = $("#userSubmit").val();
	//console.log(submission);

//get the image that was used for inspiration
	
$('#imageSelected').attr('value', image);

//get a time stamp for the submission
var dateTime= new Date();
$('#timeSubmit').attr('value', dateTime);

//create a switch statement that sorts the primary submission by the 
//image selected and pushes the information into corilating tabs
switch(image){
	case 'images/road1.jpg':
	$('#inspiphoto1').append(submission + dateTime);
	break;
}

});

//clickable tabs
$('#inspiTabs a[href="#profile"]').tab('show'); // Select tab by name
$('#inspiTabs a:first').tab('show'); // Select first tab
$('#inspiTabs a:last').tab('show'); // Select last tab

$('#inspiTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

//create on submit function on form, text drops below as done
// create a new form upon submit that will allow for comments

});
