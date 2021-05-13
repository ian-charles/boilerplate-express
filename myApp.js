var express = require('express');
var app = express();
const port = 3000;
console.log("Hello World!")

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => {
	//console.log(__dirname);
	console.log(`The app is listening at http://localhost:${port}`)
	console.log('Press Ctrl+C to stop...')
})












 module.exports = app;
