const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    addres: [
        {
            zip_code: String,
            city: String,
            municipality: String,
            country: String,
        }
    ],
    pets: {
        type: Array,
        default: []
    },
    work: {
        id_work: String,
        job: String,
        company: {
            id_company: String,
            name_company: String,
        },
    },
});
const person = mongoose.model("Person", personSchema)
module.exports = person;