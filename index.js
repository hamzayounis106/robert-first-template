var accordionHeaders = document.querySelectorAll('.accordion-header');
	accordionHeaders.forEach(function (header) {
		header.addEventListener('click', function () {
			// Toggle the display of accordion content
			var content = this.nextElementSibling;
			if (content.style.display === 'block') {
				content.style.display = 'none';
			} else {
				content.style.display = 'block';
			}
		});
	});
