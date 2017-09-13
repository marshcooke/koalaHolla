console.log('js');

$(document).ready(onReady);

function onReady (){
  console.log('jq');
  getKoala();

}

function getKoala() {
  $.ajax({
    type: 'GET',
    url: '/koala',
    success: function(response) {
      console.log('Get success: ', response);
      fillTable(response);
    }
  });
}

function fillTable(koalas) {
  var $tbody = $('#fillMe');

  for (var i = 0; i < koalas.length; i++) {
    var koala = koalas[i];
    var $trow = $('<tr>');
    $trow.append('<td>' + koala.name + '<td>');
    $trow.append('<td>' + koala.age + '<td>');
    $trow.append('<td>' + koala.gender + '<td>');
    $trow.append('<td>' + koala.transfer + '<td>');
    $trow.append('<td>' + koala.notes + '<td>');
    $trow.append('<td>' + isMarkedReady(koala.mark_ready) + '<td>');
    $tbody.append($trow);
  }
}

function isMarkedReady(isMarked) {
  if (isMarked) {
    return 'Ready for Transfer';
  } else {
    return '';
  }
}

function postKoala() {
  $.ajax({
    type: 'POST',
    url: '/koala',
    data: {
      name: 'Kim',
      age: 12,
      gender: 'F',
      transfer: true,
      notes: 'She loves postgres',
      mark_ready: false
    },
    success: function (response) {
      console.log('Post success: ', response);
    }
  });
}