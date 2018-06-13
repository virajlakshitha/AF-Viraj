const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const QueueSchema=Schema({
    doctor: {
        type: String,
        require: true
    },
    patients: [{
        status:String,
        patient:{
            type: Schema.Types.ObjectId,
            ref: 'Patient'
        }
    }],
    treatStatus:{
        type:String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    assignedBy: {
        type: String,
        require: true
    }
});

mongoose.model('Queue',QueueSchema);

mongoose.connect('mongodb://127.0.0.1:27017/Hospital',function (err) {
    if(err){
        console.log('Failed to connect to Mongo');
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});

module.exports = mongoose;