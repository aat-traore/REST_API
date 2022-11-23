const express =require('express')
const User = require('../model/user')
const router = express.Router()

//create a user
router.post('/post', async(req, res) => {
    const data = new User({
       FirstName:req.body.FirstName,
       LastName:req.body.LastName,

    })
    try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)   
    } catch (error) {
        res.status(400).json({message: error.message})
    }

})

// get all users
router.get('/getAll', async(req , res)=>{
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }

})
//get user by id
router.get('/getOne/:id', async(req, res) => {
    try {
        const data = await User.findById(req.params.id)
        res.status(200).json(data)
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
// updta by id
router.put('/update/:id', async(req, res)=>{
    try {
        const data= await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new :true}
            )
            res.send(data)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
// delete  user by id
router.delete('/delete/:id', async( req, res)=>{
    try {
        
        const data= await User.findByIdAndDelete(req.params.id)
        res.send(`Document with ${data.FirstName} has been delated`)
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})
module.exports = router