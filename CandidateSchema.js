const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CandidateSchema = new Schema(
    {
    "id":Number,  //Unique ID
    "first_name": String, //First name of candidate
    "last_name": String, //Last name of candidate
    "universe_permits":Array, //Array listing all Universe’s this candidate can apply
    "willing_to_do_overtime": Bool, // Willing to do overtime
    "willing_to_relocate_to_other_universe": Bool, //Willing to relocate to another univers
    "home_address": String , // Address in String unformatted
    "education_level": Number, // ID education level
    "skills": Array // All skills tied to this candidate


});

// CandidateSchema.methods.update = function(attribute, newValue) {
//     this[attribute] = newValue;
    
// };
module.exports = mongoose.model('Candidate', CandidateSchema);