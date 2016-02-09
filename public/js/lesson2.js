
    // Let's define some variables and use those variables to write
    // to the console.

    // Define variables: a,b,c,x,y,z to different data types
        var a = 2;
		  var b = 2.0;
		 
		  var c = true;
		  var d = false;
		 
		  var x = 'Bacon';
		  var y = "Bacon";
		 
		  var z = [1, true, "hammer"]; // this is a collection, AKA array
		  var obj = {firstName: 'Justin', lastName: 'Josh'};
		  var objAlso = {'firstName': "Justin", 'lastname': 'Josh'};
		 
		  console.log(a+b);
		  console.log(c && d);
		  console.log(x+y+x);
		  console.log(z[2]);
		  z[2] = 'crowbar';
		  console.log(z);
		  console.log(obj.firstName);
		  console.log(objAlso["firstName"]);
		  obj.firstName = 'MC';
		  console.log(obj.firstName);
//
//    Assignment: Create a variable for each of the following data types-
//                A. number
		 var aNumber = 7;
		 console.log('aNumber: '+ aNumber);
//                B. string
		 var aString = "believeNothing";
		 console.log('aString: '+ aString);
//                C. boolean
		 var aboo = false;
		 console.log('aboo: '+ aboo);
//                D. array
//                    i. Create an array with three numbers in it.
		 var  anArray = [1, true, 'wwwwww', 45];
		 console.log('anArray: ' + anArray);
//                E. object
//                    i. You must have two properties name and age
//                    ii. You can set those properties to values of any type, but you must have a value
		 var anObject = {name: 'Danger', age: 'Dangerous'};
		 console.log('anObject: ', anObject);
		 console.log('anObject: ', anObject.name + anObject.age);
		
//
//        A. Using the number and MDN documentation/others that you can console.log the results of various math operations: *, /, +, -, square root, floor, ceil, and a random number between 0 and 1.
		 
		 
//        B. Using the string variable console.log each of the following: 
//                - Add the word "Hey" to the end of your string variable
//                - The second letter of your string variable's value
//                - The index of the letter 'e' in your string
//                - The first three letters of your string
		 
		 console.log(aString + " Hey");
		 console.log(aString[1]);
		 console.log(aString.indexOf('e'));
		 console.log(aString.substring(0,3));
		 
//        C. Use your boolean [called bool in these instructions] print the results of your boolean expressions for the following:
//                - !bool
//                - bool || false
//                - bool || true
//                - bool && false
//                - bool && true
//                - !(bool || false)
//                - !(bool && false) 
		 
		 console.log(!aboo);
		 console.log(aboo || false);
		 console.log(aboo || true);
		 console.log(aboo && false);
		 console.log(aboo && true);
		 console.log(!(aboo || false));
		 console.log(!(aboo && false));
		 
//        D. Console.log the following:
//            - The last element of the array WITHOUT changing the array
//            - The last element of the array WITH changing the array
//            - Log the array after adding an element to the end of the array
//            - Log the array after adding an element to the second position
//            - Log the array after removing an element from the third position
		 var  anArray = [1, true, 'wwwwww', 45];
		 console.log('anArray: ' + anArray);
		 
		 console.log()
//        E. Console.log the following:
//            - The value of the name property of the object
//            - The value of the name property in a different way than you did initially
//            - Change the age property of the object and log the object
//            - Change the age property of the object and log the object but use a different method
		  var anObject = {name: 'Danger', age: 'Dangerous'};
		 console.log('anObject: ', anObject);
		 console.log('anObject: ', anObject.name + anObject.age);
//
//        CHALLENGE: Print the elements of your array from D one at a time using a for loop.
//
    