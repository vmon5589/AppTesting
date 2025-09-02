'use server'
import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    id: {type: String },
    email: {type: String, unique: true },
    username: {type: String,  unique: true},
    name: {type: String},
    image: String,
    bio: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    reposts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    onboarded: {
        type: Boolean,
        default: false
    },
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group'
        }
    ]
})

//checks if user model already exists
// if it does it uses existing model, if not, it uses the model above

const User = mongoose.models.User || mongoose.model('User',userSchema)
export default User