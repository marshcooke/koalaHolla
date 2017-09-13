console.log('js');

$(document).ready(onReady);

function onReady (){
  console.log('jq');
  $.ajax({
    type: 'GET',
    url: '/koala',
    success: function(response) {
      console.log('Sucess: ', response);
    }
  });
}