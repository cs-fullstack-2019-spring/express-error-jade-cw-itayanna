const express = require('express');
const app = express();

//making the public folder available to the user in the browser
app.use(express.static('public'));

//making defult templates pug
app.set('view engine', 'pug');

//defining the port being used
app.listen(8000, () => {
    console.log(`express running port 8000`)
});

//index route

app.get('/', (req, res) => {
    res.send('Express-Error-Jade-cw-itayanna')
});



// problem 1 route setup and rendering to index html pug file
app.get('/exercise1/:headerContent/:footerContent', (req, res) => {
    context = {
        headerContent:req.params.headerContent,
        footerContent: req.params.footerContent,
    };
    res.render('index', context);
});

// problem 2 route setup and rendering to prob2 html pug file
app.get('/exercise2/:number', (req, res) => {
    var numResult = "";
    if(req.params.number <= 0){
        numResult = "Less Than";
    }
    if(req.params.number > 1){
        numResult = "Greater Than";
    }
    context = {number: numResult};
    res.send('prob2', context)
});
