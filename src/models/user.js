import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db
     {
       fistName:String,
       lastName:String,
       email: {
           type:String,
           required:true,
           unique:true,
       },
       password:{
           type:String,
           required:true,
       },
       address:{
           type:String,
           default:"Rwanda"
        },
        role:{
            type:String,
            default:"user",
            enum:["admin","user"]
        },
       gender:{
           type:String,
           enum:["male","female","other","not-say"],  //enum list data to be registered inside these data no other data will be rejected
       },
    },
       {
           timestamps: true,  // means it has been stored
       }
);
const user = mongoose.model('User',userSchema)
export default user;











