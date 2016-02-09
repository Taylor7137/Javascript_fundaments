
        //Lets change some content and a little styles
     
        //Let's get ahold of all of these elements
		 
        var email = document.getElementById('email');
		  var password = document.getElementById('password');
		  var button = document.querySelector('#thisone');
		  var emailout = document.querySelector('#email-output');
		  var passwordout = document.getElementById('password-output');
		 
		  var tinktink= document.getElementById('thinker');
		  var tinktinkout = document.getElementById('thinker-out');
		 
        //Let's write a handling function for the button click
		 
		 button.addEventListener("click", clickbutton);
		 
		  function clickbutton (){
			  //use the elements from the form and get their values
			  var emailVal = email.value;
			  var passwordVal = password.value;		
			  
			  var tinktinkVal=tinktink.value;
           //apply that value as the innerText for the respective output portions
			  
			  emailout.innerText = emailVal;
			  passwordout.innerText = passwordVal;
			  
			  tinktinkout.innerText = tinktinkVal;
           //add a little styling
			  emailout.style.backgroundColor = 'chartreuse';
			  passwordout.style.backgroundColor = 'bisque';
			  tinktinkout.style.color = 'red';
			  tinktinkout.style.backgroundColor = 'black';
			  
			 
			  console.log('good');
			  
		  }
           
        //Let's attach an eventListener to the button for the click event

//
//        Assignment:
//            - Add another form input of your choice... Maybe age or name?
//            - Get a reference to the DOM element and assign that a variable
             
//            - Add code to the click handler so that you achieve the following:
		      
//                    - You update a value in the output section of your page
//                    - You alter the styles of the output for your field with the following
//                        --> Your font color is red
//                        --> Your element has a black background color
//                        --> The element is added using JavaScript to your page under the already present output portions.

    