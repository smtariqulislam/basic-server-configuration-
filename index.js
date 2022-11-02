const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 4000;





app.get('/',(req,res)=>{
    res.send('hello sever')
})

//middle 
app.use(cors());
app.use(express.json());





app.listen(port,()=>{
    console.log(`this sever is running${port}`)
})