import mongoose from "mongoose";

const userCreateSchema = mongoose.Schema({
    name : {required : true, type : String},
    username : {required : true, type : String, unique: true},
    email : {required : true, type : String},
    phone : {required : true, type : String},
})

const postUser = mongoose.model('usersdatas',userCreateSchema)

export default postUser;

