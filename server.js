const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return  new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return  text.toUpperCase();
});

app.use((req, res, next) =>  {
    var now = new Date().toString();
     console.log(`${now}:${req.method} ${req.url}`);
    next();
});
//  Short circuit for displaying maintenane message
// app.use((req, res, next) =>  {
//     res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
    res.render('home.hbs',{
        pageTitle:"Home Page From HandleBar",
        welcomeMessage:"Welcome to my home page"
    });
});
app.get('/about', (req, res) => {
   res.render('about.hbs',{
       pageTitle:"About Page From HandleBar"
   });
});
app.use(express.static(__dirname));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.listen(3000,()=>{
    console.log('Server is listening at port 3000');
});