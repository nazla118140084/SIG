var locMaps = L.map('map', {
    zoom: 9,
    center: new L.latLng([-5.3975221, 105.252922]),
    layers: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
});

L.marker([-5.3975221, 105.252922]).addTo(locMaps)

L.control.search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
    propertyName: 'display_name',
    propertyLoc: ['lat','lon'],
    minLength: 3,
    jsonpParam: 'json_callback',
    autoType: false,
    autoCollapse: true,
    moveToLocation: function(latlng, title, locMaps) {
        var url = L.Util.template('https://www.google.com/maps/search/{lat},{lon}/@{lat},{lon}', {
            lat: latlng.lat,
            lon: latlng.lng,
            zoom: locMaps.getZoom()
        });
        location.href = url;
    }
})
.addTo(locMaps);