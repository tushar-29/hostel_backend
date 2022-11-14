const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// const {User, Student, Complain} = require(__dirname + "/DbSchema");
require('dotenv').config();

const {addStudent} = require(__dirname + "/student/add");
const {addComplain} = require(__dirname + "/student/complain");
const {checkUserDetails} = require(__dirname + "/student/send_user_details");


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .catch (error => {
    console.log("Connection error");
    console.log(error);
    });


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", (req,res) => {
    res.json({'message': 'listen at port 3001 now'});
});

app.post("/login", (req,res) => {
    console.log("body data = ", req.body);
    checkUserDetails(req, res);
});

app.post("/add", (req,res) => {
    console.log("body data = ", req.body);
    addStudent(req, res);
});

app.post("/complain/:userId", (req,res) => {
    console.log(req.body);
    addComplain(req, res);
});



app.listen(process.env.PORT || 3001, ()=>{
    console.log("Listening at port 3001");
});