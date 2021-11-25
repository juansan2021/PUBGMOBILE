
function iniciarMap(){
    var coord = {lat:16.3450975 ,lng: -98.0652749};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}