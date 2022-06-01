$(document).ready (
    function ($) {
        console.log("Le document est chargé")
        let lat =0;
        let long=0;
        let map = L.map('map').setView([lat,long], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 5,
            controls : false
        }).addTo(map);
        let interval = setInterval(timer, 5000);
function timer () {
    $.ajax(
        {
            url: 'http://api.open-notify.org/iss-now.json',
            method: 'GET',

        }
    )
        .done(
            (donnees) => {
                console.log(donnees);
                let lat = donnees.iss_position.latitude;
                let long = donnees.iss_position.longitude;
                $("#longitude").text("Longitude " + long);
                $("#latitude").text("Latitude " + lat);
                map.flyTo([lat, long], 2);
                L.circle([lat, long], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 50000
                }).addTo(map);


            }
        )


}
    }


)

