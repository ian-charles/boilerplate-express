var express = require('express');
var app = express();
const port = 3000;
console.log("Hello World!")

app.get('/', (req, res) => {
	res.send('Hello Express')
})

app.listen(port, () => {
	console.log(`The app is listening at http://localhost:${port}`)
})












 module.exports = app;
