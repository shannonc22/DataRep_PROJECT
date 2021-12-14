// constants
const express = require('express')
const app = express()
const port = 4000
//body parser
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//navigates path
const path = require('path');
app.use(express.static(path.join(__dirname, '/../../../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const strConnection = 'mongodb+srv://admin:admin@cluster0.rmvvh.mongodb.net/books?retryWrites=true&w=majority'

main().catch(err => console.log(err));

//connects to database
async function main() {
  await mongoose.connect(strConnection);
}

const bookSchema = new mongoose.Schema({
    Title:String,
    Author:String,
    Genre:String,
    ISBN10:String,
    Publisher:String,
    PublicationDate:String,
    PageCount:String,
    Cover:String

});

const bookModel = mongoose.model('books', bookSchema);

// listening for get method request
app.get('/', (req, res) => {
  res.send('Welcome to Book Tracking App!')
})

//posts new movie data to console
app.post('/api/books', (req, res) => {
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Author);
    console.log(req.body.Genre);
    console.log(req.body.ISBN10);
    console.log(req.body.Publisher);
    console.log(req.body.PublicationDate);
    console.log(req.body.PageCount);
    console.log(req.body.Cover);
  
    //create new book
    bookModel.create({
      Title:req.body.Title,
      Author:req.body.Author,
      ISBN10:req.body.ISBN10,
      Publisher:req.body.Publisher,
      PublicationDate:req.body.PublicationDate,
      PageCount:req.body.PageCount,
      Cover:req.body.Cover
  });
  //message to confirm data is sent to server
  res.send('Data Sent to Server');
})

//displays book info at the url + id
app.get('/api/books/:id',(req, res) => {
  console.log(req.params.id);

  bookModel.findById(req.params.id,(error,data)=>{
      res.json(data);
  })
})
// displays movie array at /api/movies URL
app.get('/api/books', (req, res) => {
  
  bookModel.find((err, data)=>{
      res.json(data);
  })
})

app.put('/api/books/:id', (req, res)=>{
  console.log("Update book: "+req.params.id);
  console.log(req.body);

  bookModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
  (err,data)=>{
    res.send(data);
  })
})

// deletes movie by id
app.delete('/api/books/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);

  bookModel.deleteOne({ _id: req.params.id },
      (error, data) => {
          if (error)
              res.send(data);
          res.send(data);
      })
})

//handles requests that dont match previous ones 
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../../../build/index.html'));
  });

// port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})