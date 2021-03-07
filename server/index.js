/*  tutorial six : update single data from db using html  */

const express=require('express'); //express
const app=express(); // express --> app
const bodyParser = require('body-parser') // body parser
var cors = require('cors'); // cors
app.use(cors()); // cors --> app
app.use(bodyParser.json()) // body parser --> app
app.use(bodyParser.urlencoded({ extended: false })) // use body parser middleware for url encoded
const ObjectId=require('mongodb').ObjectID // object id is needed to match data in database
// set password from mongodb cluster
const password="9augustbd";

// app get
 



// connection string code from -->connection method --> connect your application
const MongoClient = require('mongodb').MongoClient; //required always
const uri = "mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/volunteer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true }); //unified topology set
client.connect(err => {
  const collection = client.db("volunteer").collection("volunteerCollection"); //connecting the collection
  // perform actions on the collection object

  // loading data
  app.get('/info',(req,res)=>{
    collection.find({}) //find all data from database
    .toArray((err,document)=>{ // to array is being used to load all data from db
      res.send(document) //data send to html
    })
  })


  app.get('/task',(req,res)=>{
    console.log(req.query)
    collection.find({mail:req.query.mail})
    .toArray((err,document)=>{
      res.send(document);
    })
  })

  // update
  app.patch('/update/:id',(req,res)=>{
    console.log(req.body)

    collection.updateOne({_id:ObjectId(req.params.id)}, //update data using update one & ObjectId for matching
    {
      $set:{
        name: req.body.name,
        mail: req.body.mail
      }
    })
    .then(result=>{
      res.send(result);
      console.log(result);
      // result is to say that data is updated
    })

  })


  // sending/posting data to database
  app.post('/addPeople',(req,res)=>{
    const pd=req.body;
    console.log(pd);
    collection.insertOne(pd)
    .then(result=>{
      res.send(true);
       
    })
  })


  // load single data
  app.get('/product/:id',(req,res)=>{
    console.log(req.params.id); 
    collection.find({_id:ObjectId(req.params.id)})
    .toArray((err,documents)=>{
      res.send(documents[0])
    })
  })


  // deleting data
  app.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    console.log(req.query);
    collection.deleteOne({$and:[{_id: ObjectId(req.params.id)},{mail:req.query.mail}]}) //delete one & object id
    .then((result)=>{
       
      res.send(result.deletedCount>0);
    })
  })

  console.log("DB Connected")
//   client.close();
});

// app listen
app.listen(3006,()=>{
	console.log("Listening to port at 3006 ");
})
