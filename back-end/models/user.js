import mongoose from 'mongoose';


const userSchema = mongoose.Schema({

    username:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    choosenCategory: {
        type: String,
    },

    totalScore: {
        type: Number,
        default: 0
    }


}, {timestamps: true});

const userModel = mongoose.model('users' , userSchema);


export default userModel