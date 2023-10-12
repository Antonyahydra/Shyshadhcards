const asyncHandler =require('express-async-handler')
const Uservcard = require("../../models/uservcard")


const newUservcard = asyncHandler(async (req,res) => {
    try {
        const newVcard= await Uservcard.create(req.body);
        return res.status(200).json(newVcard) 
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = {
    newUservcard
}


