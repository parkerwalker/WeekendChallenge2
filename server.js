var express = require('express');
var app = express();
var path = require('path');
var bodyParser =  require('body-parser');

var port = process.env.PORT || 3000

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen( port, function(){
  console.log('server is up');
});//end port listener

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
});//end base url

app.post('/equation', function(req, res){
  console.log('post /equation hit', req.body);
  var num1 = Number(req.body.variable1);
  var num2 = Number(req.body.variable2);
  var math = req.body.theMath;

  var answerToReturn = {
    answer: calculation(num1, num2, math)
  }
  console.log(answerToReturn);
  function calculation(num1, num2, math){

  switch(math){
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
      default:
    }//end switch
  };//calculation
  res.send(answerToReturn);
});// end post to /equation











//block
