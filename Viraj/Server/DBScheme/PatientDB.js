const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PatientSchema=Schema({
    hin: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
});

mongoose.model('Patient',PatientSchema);

mongoose.connect('mongodb://127.0.0.1:27017/Hospital',function (err) {
   if(err){
       console.log('Failed to connect to Mongo');
       process.exit(-1);
   }
   console.log('Connected to MongoDB');
});

module.exports = mongoose;