const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/crudapp")
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error);
  });



  const schema = new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        role:String,
        tel:Number,
        email:String,
        description:String 
    })


    const userModel = mongoose.model("User",schema);

    module.exports = userModel;