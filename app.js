var express = require('express');
var app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = process.env.PORT || 80;


app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'static')));

mongoose.connect('mongodb+srv://Prabhakar:<password>@cluster0.gvrdg.mongodb.net/balajiDB')

const formSchema = {
    name: String,
    contact_number: Number,
    email: String,
    pincode: Number,
    bike_name: String,
    bike_number: Number,
    bike_problem: String
}

const Form = mongoose.model('form',formSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html/home.html'));
});
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html/contact.html'));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html/about.html'));
});
app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html/services.html'));
});

app.post("/", (req, res) => {
    let newForm = new Form({
      name: req.body.name,
      contact_number: req.body.number,
      email: req.body.email,
      pincode: req.body.pincode,
     
    })
    newForm.save();
    res.sendFile(path.join(__dirname, 'static', 'html/success.html'));
});


app.post('/contact',(req,res)=> {

    let newForm = new Form({
      name: req.body.name,
      contact_number: req.body.number,
      email: req.body.email,
      pincode: req.body.pincode,
      bike_name: req.body.bike_name,
      bike_registration_number: req.body.bike_number,
      bike_problem: req.body.bike_problem

    })
    newForm.save();
    res.sendFile(path.join(__dirname, 'static', 'html/success.html'));
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});



// mongo "mongodb+srv://cluster0.gvrdg.mongodb.net/myFirstDatabase" --username Prabhakar
