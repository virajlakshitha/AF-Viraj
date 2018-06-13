const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const QuestionSchema=Schema({
    name: {
        type: String,
        require: true
    },
    relateTo: {
        type: Number,
        require: true
    },
    remarks: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    }
});

mongoose.model('Question',QuestionSchema);

mongoose.connect('mongodb://127.0.0.1:27017/Hospital',function (err) {
    if(err){
        console.log('Failed to connect to Mongo');
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});

module.exports = mongoose;