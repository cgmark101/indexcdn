var map = L.map('map'),

    realtime = L.realtime('https://wac5gf.deta.dev/deta', {
        interval: 3 * 10000
    }).addTo(map);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

realtime.on('update', function () {
    map.fitBounds(realtime.getBounds(), {
        maxZoom: 17
    });
});

