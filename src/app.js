const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app = express();
const port =process.env.PORT || 8000;
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../tamplates/views");
const partials_path=path.join(__dirname,"../tamplates/views/partials");
app.set('view engine','hbs');
app.set('views',template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);
app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:'oops!this page is not avilabale'
    });
});
app.listen(port,()=>{
   console.log(`you are listening from ${port}`);
});
