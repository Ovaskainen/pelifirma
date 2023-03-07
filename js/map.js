/*=============== GOOGLE MAP ===============*/
function myMap() {
    let mapProp = {
      center: new google.maps.LatLng(60.481909, 26.90766),
      zoom: 10,
    };
    let map = new google.maps.Map(
      document.getElementById('googleMap'),
      mapProp
    );
  }