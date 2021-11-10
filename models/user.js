const { Schema, model } = require('mongoose');

//Ani helped me with how to set this up
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please enter user name.',
        trimmed: true 
    },
    email: {
        type: String,
        required: 'Please enter a valid email',
        unique: true,
        validate: [validateEmail, 'Please enter a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thoughts',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ],
},
{
    toJSON: {
        virtuals: true
    },
    id: false,  
},
);
