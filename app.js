const express = require('express');
const app = express();
const port = 3000;
const {getAbout} = require('./routes/about');

app.get("/", (req, res) =>{
    res.send("welcome to node app");
});

app.get("/about", getAbout);

app.listen(port, () =>{
    console.log(`App started at port ${port}`);
})