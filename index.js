const express = require ('express')
const cors= require('cors');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;


const app = express ()
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://bappeeDb:gkfC5pCOTjalHiks@cluster0-4uwvr.mongodb.net/test?retryWrites=true&w=majority";
let client = new MongoClient(uri, { useNewUrlParser: true });

//nabazar order form
app.post('/sentData',(req,res)=>{
  const sendAll = req.body;
 
  console.log(sendAll);

  client.connect(err => {
    const collection = client.db("FormDetails").collection("personInfo");
    collection.insertOne(sendAll,(err,result)=>{
       if(err){
           console.log(err)
       }
       else{
        res.send(result.ops[0]);

       }
            
   })
   client.close();
  });
   
})


app.listen(4000 ,()=> console.log('Listening to port 4000'))