  
      //Lets change some content and a little styles
		 
		 var emailIn = $('#email');
		 var passIn = $('#password');
	    var emailOut = $('#email-output');
		 var passOut = $('#password-output');
		 var button = $('button.btn.btn-primary');
		 
		 // added code from the assignment below
		 
		 var nameIn = $('#name');
		 var nameOut = $('#name-output');

      //Let's get ahold of all of these elements

      //Let's write a handling function for the button click
          //use the elements from the form and get their values
          //apply that value as the innerText for the output respective output portions
          //add a little styling
      //Let's attach an eventListener to the button for the click event
      button.on('click', FF);
		 
		function FF(){
			var emailVal = emailIn.val();
			var passVal = passIn.val();
			emailOut.text(emailVal);
			passOut.text(passVal);
			
			
			// added code form the assignment below
			var nameVal = nameIn.val();
			nameOut.text(nameVal);
			
			nameOut.css('background-color', 'black');
			nameOut.css('color', 'red');
			
			// end added code
			
			
			emailOut.css('background-color', 'lightsalmon');
			passOut.css('background-color', 'tomato');
			
//			var heading = $('<h3></h3>');
//		   console.log(heading);
		}
//      
//      Assignment:
//          - Add another form input of your choice... Maybe age or name?
		 
		 
//          - Get a reference to the DOM element and assign that a variable
//          - Add code to the click handler so that you achieve the following:
//                  - You update a value in the output section of your page
//                  - You alter the styles of the output for your field with the following
//                      --> Your font color is red
//                      --> Your element has a black background color
//                      --> The element is added using JavaScript to your page under the already present output portions.
//      
   