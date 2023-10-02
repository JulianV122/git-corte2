const mongoose = require("mongoose");
const WorkerSchema = mongoose.Schema({
    firstname : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    work :[{
            id_work: String,
            name_work: String,
        },
    ],
    type_document : {
        type: String,
        required: true,
    },
    document_number : {
        type: String,
        required: true,
        unique: true,
    }
});
const Worker = mongoose.model("Worker",WorkerSchema)
module.exports = Worker;