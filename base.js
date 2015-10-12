console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var image='';

//Start with a random inspiration photo
window.onload= function (){
 	var rand = Math.round((Math.random() * 15) + 1);
 	console.log(rand);
	switch(rand){
		case 1:
		$('#photodisplay img').attr('src' , 'images/road1.jpg');
		break;
		case 2:
		$('#photodisplay img').attr('src' , 'images/road2.jpg');
		break;
		case 3:
		$('#photodisplay img').attr('src' , 'images/road3.jpg');
		break;
		case 4:
		$('#photodisplay img').attr('src' , 'images/road4.jpg');
		break;
		case 5:
		$('#photodisplay img').attr('src' , 'images/road5.jpg');
		break;
		case 6:
		$('#photodisplay img').attr('src' , 'images/road6.jpg');
		break;
		case 7:
		$('#photodisplay img').attr('src' , 'images/road7.jpg');
		break;
		case 8:
		$('#photodisplay img').attr('src' , 'images/road8.jpg');
		break;
		case 9:
		$('#photodisplay img').attr('src' , 'images/road9.jpg');
		break;
		case 10:
		$('#photodisplay img').attr('src' , 'images/road10.jpg');
		break;
		case 11:
		$('#photodisplay img').attr('src' , 'images/road11.jpg');
		break;
		case 12:
		$('#photodisplay img').attr('src' , 'images/road12.jpg');
		break;
		case 13:
		$('#photodisplay img').attr('src' , 'images/road13.jpg');
		break;
		case 14:
		$('#photodisplay img').attr('src' , 'images/road14.jpg');
		break;
		case 15:
		$('#photodisplay img').attr('src' , 'images/road15.jpg');
		break;
	}
	
	image = $("#photodisplay img").attr('src');

};

//create on thumbnail click full image appears in display to left


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
	var submitName = $("#submiterName").val();
	console.log(submission);

	//get the image that was used for inspiration
	$('#imageSelected').attr('value', image);

	//get a time stamp for the submission
	var dateTime= new Date();
	$('#timeSubmit').attr('value', dateTime);

	//create a switch statement that sorts the primary submission by the 
	//image selected and pushes the information into corilating tabs
	switch(image){
		case 'images/road1.jpg':
		$('#inspi1Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road2.jpg':
		$('#inspi2Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road3.jpg':
		$('#inspi3Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road4.jpg':
		$('#inspi4Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road5.jpg':
		$('#inspi5Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road6.jpg':
		$('#inspi6Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road7.jpg':
		$('#inspi7Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road8.jpg':
		$('#inspi8Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road9.jpg':
		$('#inspi9Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road10.jpg':
		$('#inspi10Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road11.jpg':
		$('#inspi11Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road12.jpg':
		$('#inspi12Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road13.jpg':
		$('#inspi13Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road14.jpg':
		$('#inspi14Submits').append(submitName + submission + dateTime);
		break;
		case 'images/road15.jpg':
		$('#inspi15Submits').append(submitName + submission + dateTime);
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
