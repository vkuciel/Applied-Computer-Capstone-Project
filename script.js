var main = function() {	
  
	$('img').click(function() {
  	$('.dropdown-menu').toggle();
  });
  
  $('form').submit(function() {
    var email = $('#email').val(); 
    var password = $("#password").val(); 
  	if (email === "") {
    	$('.email-error').text('Invalid email');
    } else if (password === "") {
    	$('.password-error').text('Invalid password');
    }
    return false;
  });
};

$(document).ready(main);