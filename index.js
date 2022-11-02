const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 4000;





app.get('/',(req,res)=>{
    res.send('hello sever')
})

app.use(cors());
app.use(express.json());



//username: database
//password: tTnhFzyU3qgknRfz



const uri = "mongodb+srv://database:tTnhFzyU3qgknRfz@cluster0.781yldu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");
        // create a document to insert
        const doc = {
            name: "tariqul",
            hobby: "chess",
        }
        const result = await haiku.insertOne(doc);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`this sever is running${port}`)
})