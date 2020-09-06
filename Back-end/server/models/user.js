const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    restaurant_name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required :true
    },
    money:{
        type: Number,
        required:true
    }
})

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {

    const user = this
    return jwt.sign({_id: user._id}, process.env.JWT_KEY, {expiresIn:'20h'})
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email} )
    if (!user) {
        return null
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        return null
    }
    return user
}



module.exports = User = mongoose.model('user',userSchema);