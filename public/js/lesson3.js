
    // This is an internal script tag. We will use it to play 
    // around.

    // 1. Getting DOM elements by Id
		 var firstDiv = document.getElementById("first");
		 console.log(firstDiv);

    // 2. Getting DOM elements by class
		 var iconBars = document.getElementsByClassName('icon-bar');
		 console.log(iconBars);

    // 3. Getting DOM elements by tag
		 var anchorElements = document.getElementsByTagName('a');
		 console.log(anchorElements);

    // 4. Creating a DOM element
		 var hrElement = document.createElement('hr');
		 console.log(hrElement);

    // 5. Using querySelector to grab DOM elements
		 var firstDiv2 = document.querySelector('#first');
		 console.log(firstDiv2);
		 var iconBar = document.querySelector('.icon-bar');
		 console.log(iconBar);
		 var anchorElement2 = document.querySelector('a');
		 console.log(anchorElement2);
		 
    // 6. Using querySelectorAll to grab DOM elements that have // the same selector 
		 var icons = document.querySelectorAll('.icon-bar');
		 console.log(icons);
		 var anchors = document.querySelectorAll('a');
    	 console.log(anchors);
//****************************************************************//

//   Assignment: Complete the following tasks. Console.log all of the variables.
//    1. Assign the element with the Id of second in a variable called second.
		 
		 var second = document.querySelector('#second');
		 console.log(second);
//
//    2. Assign the elements that have the class container to a variable called containers.
		 
		 var containers = document.getElementsByClassName('container');
		 console.log(containers);
//
//    3. Assign all of the li elements to the variable listItems.
		 
		 var listItems = document.querySelectorAll('li');
		 console.log(listItems);
//
//    4. Create a new h3 tag and assign that to the variable heading.
		 
		 var heading = document.createElement('h3');
		 console.log(heading);
//
//    5. Complete #1 using the querySelector method on the document object but change the variable name to secondQuery.
		 
		 var secondQuery = document.getElementById('second');
		 console.log(secondQuery);
//    
//    6. Complete #2 using the querySelectorAll method on the document object but change the variable name to containersQueryAll.

		 var containersQueryAll = document.querySelectorAll('.container');
		 console.log(containersQueryAll);
		 
		 var taylor = [1, 2, 3, 4,5, 6, 7, 8];
	    console.log(taylor);
		 
		 console.log(taylor.length);
		 for (i=0; i<taylor.length; i=i+1){
			 console.log(taylor[i]);
		 }
		 
		
    