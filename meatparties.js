var PATH = 'https://raw.github.com/diffalot/meatparties/gh-pages/';
//document.body.appendChild(document.createElement('script')).src=PATH+'speakGenerator.js';

var logger = function (data) {
	console.dir(data);
};

$.ajax({
	url: PATH + 'guestlist.json',
	dataType: 'jsonp',
	jsonp: false,
	jsonpCallback: 'logger'
});
