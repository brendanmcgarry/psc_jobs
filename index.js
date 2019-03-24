const express = require('express');
const app = express();
const mongoose = require('mongoose');

let mongodb = 'mongodb://localhost:27017';
mongoose.connect(mongodb);

const CandidateSchema = require('./schemas/CandidateSchema');
const PostingSchema = require('./schemas/PostingSchema');

console.log(CandidateSchema);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // GET request for homepage
    res.sendFile(path.join(public, 'index.html'));
})

app.post('/jobs/create', (req, res) => {
    // POST to create job posting
    // TODO: auth required
    console.log(req.post);
})

app.delete('/jobs/delete', (req, res) => {
    // DELETE request to delete job posting
    // should require some kind of authorization
})

app.put('/jobs/update', (req, res) => {
    // PUT request to update job posting
    // authorization required of course
})

const server = app.listen(8000);
