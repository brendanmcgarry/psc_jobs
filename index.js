const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')


app.get('/', (req, res) => {
	// GET request for homepage
	res.send('Hi!');
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

const server = app.listen(8000, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log(`PSC Jobs site listening at http://${host}:${port}`)
})
