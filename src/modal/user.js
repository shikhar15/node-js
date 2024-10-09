import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    employeeID:{
        type: String,
        required: [true, "employeeID is required"]
    },
    firstName:{
        type: String,
        required: [true, "firstName is required"]
    },
    middleName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: [true, "lastName is required"]
    },
    email:{
        type: String,
        required: [true, "email is required"]
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    hierarchy_id:{
        type: String,
        required: [true, "hierarchy_id is required"]
    },
});

userSchema.set('timestamps', true);

export const User = mongoose.model('appusers', userSchema);
