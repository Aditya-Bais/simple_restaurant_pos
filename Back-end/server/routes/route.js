const express = require('express');
const {check , validationResult} = require('express-validator');
const User = require('../models/user');
const auth = require('../middleware/auth')

const router = express.Router();

router.post('/registration',[
    check('email','Email is not valid').isEmail(),
    check('password','Password is required').not().isEmpty()

], async (req,res)=>{
    try{
        let {email,password,name,restaurant_name} = req.body;
        let user = await User.findOne({email});
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401).json({errors: errors.array()});
        }
        if(user){
            return res.status(401).json({msg: "This email is already registered with another user."})
        }
        let money=0
        user = new User({
            name,
            restaurant_name,
            email,
            password,
            money  
        })
        await user.save();
        return res.redirect('/')
    }catch(error){
        console.log(error.message);
        return res.status(500).json({msg:"Server Error...",error})
    }
})



router.post('/logins',[
    check('email','Type Proper Email').isEmail(),
    check('password','Password is required').not().isEmpty()
],
async (req,res)=>{
    try{
    let {email,password} =req.body;
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({errors: errors.array()});
    }
   
    const user = await User.findByCredentials(email,password);
    if(user == null){
        return res.status(401).json({msg:"invalid Credential"});
    }
    token = await user.generateAuthToken();
    res.cookie('posauth',token);
    res.redirect('/pos/ver/main');
    }catch(error){
    return res.status(500).json({msg:"Error...",})
}
})

router.post('/main/addmoney',auth,async(req,res)=>{
    try{
        let {id,addmoney}=req.body;
        let user = await User.findById(id);
        let{money}= user
        let sum= parseInt(addmoney,10) + parseInt(money,10);
        User.updateOne({_id:id},  
            {money: sum}, function (err, docs) { 
            if (err){ 
                console.log(err) 
            } 
            else{ 
                res.clearCookie('posauth')
                res.redirect('/')
            } 
        });
    }catch{
        console.log('error')
        res.json({"msg":"koko"})
    }
})



module.exports = router;