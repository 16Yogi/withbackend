const mongooes = require("mongoose")
mongooes.connect("mongodb+srv://xoroma8042:f7zJvZzCOkHoJKfl@cluster0.0zilofs.mongodb.net/?retryWrites=true&w=majority/mydb1")

.then(()=>{
    console.log("Connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongooes.Schema({
    name:{
        type:{
            type:String,
            requirep:true
        }
    },
    email:{
        type:{
            type:String,
            requirep:true
        }
    },
    number:{
        type:{
            type:String,
            requirep:true
        }
    }
})

const collection = mongooes.model("registration",newSchema)
module.exports=collection