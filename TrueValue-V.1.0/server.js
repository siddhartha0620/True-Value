/*
	This includes all the default configurations that are need to devlop the web site.
*/
var express = require('express'),
	app = express(),
	path = require('path'),
	appConfig = {
		css: '/www/css',
		fonts: '/www/fonts',
		img: '/www/img',
		javascript: '/www/js',
		views: '/www/views'
	};


/*configuring the app to use the port to 3000*/
app.listen(3001, function () {
  	console.log('Server Started & now listening to port: 3001');
});

/*configuring the default site entry*/
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/www/index.html'));
});

/*configuring the app to load static assets.*/
app.use('/css', express.static(__dirname + appConfig.css)); //route all the css files.
app.use('/img', express.static(__dirname + appConfig.img)); //route all the css files.
app.use('/fonts', express.static(__dirname + appConfig.fonts)); //route all the font files.
app.use('/js', express.static(__dirname + appConfig.javascript)); //routue all js files.
app.use('/views', express.static(__dirname + appConfig.views)); //routes all views.