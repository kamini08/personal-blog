import mongoose, {Document, Schema} from "mongoose";


export interface IBlog extends Document {
    id: string;
    title: string;
    date: string;
    image: string;
}


const postSchema: Schema = new mongoose.Schema({
    id: {
        type: String, 
        required: true
    },

    title: {
        type: String,
        required: true

    },
    date: {
        type: String,
        required: true
    },

    image: {
        type: String
    }
})

 const Blog = mongoose.model<IBlog>("Blog", postSchema);

 export default Blog;