import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    message:String,
    name: String,
    timeStamp: String,
    received:false
});

export default mongoose.model('messagecontents',messageSchema)