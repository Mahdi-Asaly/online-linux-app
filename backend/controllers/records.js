const Records = require("../models/record.js");

module.exports.getRecords = async (req, res)=>{
    try{
        console.log('getting records.');
        const records = await Records.find();
        res.status(200).json(records);
    }
    catch(err){
        res.status(404).json( {message: err.message});
    }
}


