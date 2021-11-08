var locMaps = new L.Map('map', {
    zoom: 11, 
    center: new L.latLng([-5.3975221, 105.252922]) 
});

L.marker([-5.3975221, 105.252922]).addTo(locMaps)
locMaps.addLayer(new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));

locMaps.addControl( new L.Control.Search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
    propertyName: 'display_name',
    propertyLoc: ['lat','lon'],
    marker: L.marker([0,0],{radius:30}),
    minLength: 3,
    jsonpParam: 'json_callback',
    autoType: false,
    autoCollapse: true,
}));