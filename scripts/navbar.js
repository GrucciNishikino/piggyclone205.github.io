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
				navbar.classList.remove("static");
				fix.style = "padding-top: " + navbar.offsetHeight + ";";
			} else {
				navbar.classList.remove("sticky");
				navbar.classList.add("static");
				fix.style = "margin-top: 0px;";
			}
			var windowScroll = this.scrollY; 

			var $logo = document.getElementsByClassName('logo')[0];
			$logo.style.transform = 'translateY(' + windowScroll/2 + '%)';

			var $backBird = document.getElementsByClassName('parbg')[0];
			$backBird.style.transform = 'translateY(' + windowScroll/4 + '%)';

			var $foreBird = document.getElementsByClassName('parfg	')[0];
			$foreBird.style.transform = 'translateY(-' + windowScroll/100 + '%)';
		}
		window.addEventListener('scroll', scrollFunc);