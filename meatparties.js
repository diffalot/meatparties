var PATH = 'https://raw.github.com/diffalot/meatparties/gh-pages/';
//document.body.appendChild(document.createElement('script')).src=PATH+'speakGenerator.js';

$.getJSON( PATH + 'guestlist.json', function (data) {
	console.log(data);
});
