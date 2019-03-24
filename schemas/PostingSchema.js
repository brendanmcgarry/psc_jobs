const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostingSchema = new Schema({
    id:              Number,  // Unique ID
    description_en:  String,  // English description
    description_fr:  String,  // French description
    salary:          Number,  // Job postings salary
    work_location:   String,  // Address in String unformatted
    work_universe:   Number,  // Universe ID
    required_skill:  Array,   // All skills required for this Job Posting  
    date_posted:     Date,    // Date
    education_level: Number   // ID minimum education level required
});

module.exports = mongoose.model('Posting', PostingSchema);
