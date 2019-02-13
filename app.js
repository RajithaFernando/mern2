var http = require('http');
var fs = require('fs');

// var mywrite = fs.createWriteStream(__dirname + '/write.txt');
// myread.on('data', function(chunk){
//     console.log('new chunk recived');
    
//     mywrite.write(chunk);
// });



var server = http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'application/json'});
    // res.end('Hay User');

    // var myread = fs.createReadStream(__dirname + '/index.html','utf8');
    // myread.pipe(res);

    var myobj = {
        name: 'Rajitha',
        job: 'Data Scientist',
        age: 22
    };

    if(req.url === '/home' || req.url ==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/api') {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(myobj));

    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    

});
server.listen(3000,'127.0.0.1');
console.log('Listning to port 3000....');

// ########################################

// var fs = require('fs');
// var subs = fs.readFileSync('aroundtheworld.srt','utf8');
// // console.log(subs);
// fs.writeFileSync('new2.srt',subs);

// #########################################


// var events = require('events');
// var util = require('util');

// var someone = function(name){
//     this.name = name;
// };


// util.inherits (someone, events.EventEmitter);

// var Sathira = new someone('Sathira Ranaweera');
// var Pramuditha = new someone('Pramuditha Kaushalya');
// var Rajitha = new someone('Rajitha Fernando');

// var union = [Sathira, Pramuditha, Rajitha];


// union.forEach(function(someone){
//     someone.on('talk', function(group){
//         console.log(someone.name + 'Says :' +group);
//     });
// });

// Sathira.emit('talk', 'Lets Start an poal');

// Rajitha.emit('talk', 'Mr. Bamunu, Its Your Chance');

// Pramuditha.emit('talk', 'Get the F out !');






//##########################################


// var events = require('events');

// var mySome = new events.EventEmitter();

// mySome.on('something', function(msg){
//     console.log(msg);
// });


// mySome.emit('something', 'This works fine');




//###########################################

// console.log('hay Rajitha');

//###########################################



// var time = 10;



// var fun = function(){
//     console.log('This Works');
// };

// fun();

// var timer = setInterval(function(){
    
//     console.log( time +' second passed');
//     time -=  1;
//     if (time ==0){
//         console.log('booooooooooooooooom');
//         clearInterval(timer);
//     }
    
// }, 1000);

// console.log(__dirname);