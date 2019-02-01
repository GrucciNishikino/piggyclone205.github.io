// When the user scrolls the page, execute myFunction 
		window.onscroll = function() {myFunction()};

		// Get the navbar
		var navbar = document.getElementById("navbar");
		//fix annoying scrolling error
		var fix = document.getElementById("fixnavbar");

		// Get the offset position of the navbar
		var sticky = navbar.offsetTop;
		

		// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
		function myFunction() {
			if (window.pageYOffset >= sticky) {
				navbar.classList.add("sticky");
				fix.style = "padding-top: " + navbar.offsetHeight + ";";
			} else {
				navbar.classList.remove("sticky");
				fix.style = "margin-top: 0px;";
			}
		}
var title = document.getElementById("titlehead");
title.classList.remove("parahead");