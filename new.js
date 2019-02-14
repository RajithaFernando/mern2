var express = require('express');

var app = express();
app.set('view engine', 'ejs');


app.get('/', function(req,res){
    res.render(index);
});
app.get('/contact', function(req,res){
    res.send('This is Contact page');
});
app.get('/profile/:name', function(req,res){
    var data = {
        age :22,
        job : 'Data Scientist',
        hobby : ['Coding', 'sleeping']

    };
res.render('profile', {person : req.params.name, data:data})
});

app.listen(3000);