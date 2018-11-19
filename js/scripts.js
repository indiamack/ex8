$(function(){
  console.log('scripts loaded');

  var url = 'http://api.open-notify.org/iss-now.json';
  var coordinates = [];
  var html = '';

  $.ajax({
    type: 'GET',
    url: url,
    data: coordinates,
    async: true,
    success: function(coordinates){
      console.log(coordinates);


     document.getElementById("results").innerHTML = coordinates.iss_position.latitude + ', ' + coordinates.iss_position.longitude;


    } //end success

  });



}); //end scripts
