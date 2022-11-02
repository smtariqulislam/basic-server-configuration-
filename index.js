const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 4000;

//middle middleware
app.use(cors());

app.use(express.json());



app.get('/',(req,res)=>{
    res.send('hello sever');
})


app.listen(port,()=>{
    console.log(`this sever is running${port}`)
})
