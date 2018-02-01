$('#login-form').submit(function(event){

	var user= $('form').find('input[id="user"]').val();
	event.preventDefault();
	$.ajax({

		url: 	'login.php',
		type: 	'POST',
		data: 	{user: 	user}
	}

	).done(function (data){

		alert(data);

	});






});





