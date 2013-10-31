var PATH = 'https://raw.github.com/diffalot/meatparties/gh-pages/';
//document.body.appendChild(document.createElement('script')).src=PATH+'speakGenerator.js';

$.ajax({
	url: PATH + 'guestlist.json',
	dataType: 'jsonp',
	success: function (data) {
		console.dir(data);
	}
});
