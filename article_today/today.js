jQuery(document).ready(function($) {
	// Kill the link
	$('#grab_date').attr('href', 'javascript:void(0);');
 
 	// AJAX call to the function
  $('#grab_date').click(function() {
		$.ajax({
 			type: "GET",
			url: "/grab_date",
 			data: "node=" + $("#grab_date").attr("node"),
 			success: function(msg){
				eval(msg);
 			}	
		});

		// Building arrays for days' and months' names
		var now = new Date();
		var weekday=new Array(7);
		weekday[0]="Sunday";
		weekday[1]="Monday";
		weekday[2]="Tuesday";
		weekday[3]="Wednesday";
		weekday[4]="Thursday";
		weekday[5]="Friday";
		weekday[6]="Saturday";
		var months=new Array(7);
		months[0]="January";
		months[1]="February";
		months[2]="March";
		months[3]="April";
		months[4]="May";
		months[5]="June";
		months[6]="July";
		months[7]="August";
		months[8]="September";
		months[9]="October";
		months[10]="November";
		months[11]="December";
		var day = weekday[now.getDay()];
		var month = months[now.getMonth()];

		// Change the display in the page
		// Alter the class accordingly
		$('.date-display-single').html(day + ', ' + month + ' ' + now.getDate() + ', ' + now.getFullYear() + ' - ' + now.getHours() + ':' + now.getMinutes());
	});
});