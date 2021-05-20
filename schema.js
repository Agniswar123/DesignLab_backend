const mongoose=require('mongoose');
let mySchema = new mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	email:String,
	mobile: String,
});
module.exports=mongoose.model('testcollections',mySchema)
