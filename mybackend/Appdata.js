// const express = require(express)
const cors = require("cors")

const collection = require("./Mongo")
const app = express()
app.use(express.json())
app.use(express.urlendcoded({extended:true}))
app.use(cors())

app.get("/", cors(),(req,res)=>{

})

app.post("/",async (req,res)=>{
    const {name} = req.body
    const {email} = req.body
    const {number} = req.body

    const data = {
        name:name,
        email:email,
        number:number
    }
    await collection.insertMany([data])
})

app.listen(8000,()=>{
    console.log("port connected")
})