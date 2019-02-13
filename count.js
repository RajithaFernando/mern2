var test = function(arr){
    return 'this array have ' + arr.length + 'eliments inside';

};
var test2 = function(a,b){
    return `the total is ${a+b}`;
};


// console.log('hay Rajitha');

// require('./count');

// testarr = ['Raji', 'tha', 'Priya', 'shantha'];
// console.log(test(testarr));
// console.log(testarr[1]);

module.exports.test = test ;
module.exports.test2 = test2 ;