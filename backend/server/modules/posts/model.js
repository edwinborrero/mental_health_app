import mongoose, {Schema} from "mongoose";

const PostSchema = new Schema({
    body: {
        type: String,
        required: true,
        minlength: [10, '10 characters long at least'],
        maxlength: 150,
    },
    postedBy: {
        type: mongoose.Schema.Types.Mixed,
    },
    image: {
        type: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    category: {
        type: String,
        required: true
    }
}, { timestamps: {createdAt: true, updatedAt: false} } );

export default mongoose.model('Post', PostSchema);