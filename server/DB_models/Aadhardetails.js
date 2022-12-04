const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Aadhardetails = new Schema({
  Aadhar: { type: String, required: true, maxLength: 100 },
  Name: { type: String, required: true, maxLength: 100 },
  Mobile: { type: String , required:true },
  DOB:{ type:Date ,default:Date.now ,required:true},
  Address:{ type:String } 

});


module.exports = mongoose.model("Aadhardetails",Aadhardetails);