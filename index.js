const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

let mongodb = 'mongodb://localhost:27017';
mongoose.connect(mongodb);

const CandidateSchema = require('./schemas/CandidateSchema');
const PostingSchema = require('./schemas/PostingSchema');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // GET request for homepage
    res.sendFile(path.join(public, 'index.html'));
})

app.post('/posting/create', (req, res) => {
    // POST to create job posting
    // TODO: auth required
    let posting = req.body.posting;
    posting.date_posted = Date.now();
    posting.required_skill = posting.required_skill.split(' ');
    console.log(posting);
    PostingSchema.create(posting, (err, posting) => {
        if (err)
            console.log(err);
        else {
            console.log('Created posting:');
            console.log(posting);
        }
    });
})

app.delete('/posting/delete', (req, res) => {
    // DELETE request to delete job posting
    // should require some kind of authorization
})

app.put('/posting/update', (req, res) => {
    // PUT request to update job posting
    // authorization required of course
})

const server = app.listen(8000);
