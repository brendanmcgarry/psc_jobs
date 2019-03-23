var express = require('express');
var app = express();

app.get('/', (req, res) => {
	// GET request for homepage
})

app.post('/jobs/create', (req, res) => {
	// POST to create job posting
	// auth required
})

app.delete('/jobs/delete', (req, res) => {
	// DELETE request to delete job posting
	// should require some kind of authorization
})

app.put('/jobs/update', (req, res) => {
	// PUT request to update job posting
	// authorization required of course
})

var server = app.listen(8000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log(`PSC Jobs site listening at http://${host}:${port}`)
})
