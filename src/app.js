const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname,"../public");
const newpath = path.join(__dirname,"../templets/views");
const particanpath = path.join(__dirname,"../templets/partials");

app.set("view engine","hbs");
app.set("views",newpath);
hbs.registerPartials(particanpath);
//use middle ware for static datapass
// app.use('/public',express.static('public'));
app.use(express.static(staticPath));



app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/service",(req, res)=>{
    res.render("service");
});

app.get("/weather",(req, res)=>{
    res.render("weather");
});

app.get("/blog",(req, res)=>{
    res.render("blog");
});

app.get("/contact",(req, res)=>{
    res.render("contact");
});

app.get("*",(req, res)=>{
    res.render("404");
});

app.listen(port,()=>{
    console.log(`listen to the port ${port}`);
});