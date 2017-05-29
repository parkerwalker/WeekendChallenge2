console.log('js');
$(onReady)

function onReady(){
  console.log('jq');

  $('#enter').on('click', runProblem);
  $('#clear').on('click', removeResults);
}

function runProblem(){
  console.log('enter');
  console.log($('.mathInput').val());

  var inputToSend = {
    variable1: $('#firstNumber').val(),
    variable2: $('#secondNumber').val(),
    theMath: $('.mathInput').val()
  }//end inputToSend
  $.ajax({
    type:'POST',
    url: '/equation',
    data: inputToSend,
    success: function(response){
      console.log('went to sever');
      console.log(response.answer);
      $('.results').append('<br>' + response.answer)
    }//end success
  });//end ajax
$('#firstNumber, #secondNumber').val('');
};//end runProblem

function removeResults(){
  $('.results').empty();
}
