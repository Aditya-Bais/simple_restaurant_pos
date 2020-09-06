const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    
})

mongoose.connection.on('error', console.error.bind(console, 'MONGODB Connection Error'))
mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected!!!');
})