const {MongoClient} = require('mongodb');
const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const uri = 'mongodb+srv://enriquej999:wXZoKVZKtgCzK7Pt@cluster0.bzbmifd.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true});

async function mongoDbConnect(){ 
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } catch(error) {
        // Ensures that the client will close when you finish/error
        console.log(error);
        await client.close();
      }
}

mongoDbConnect();


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});