var weatherUrl = 'http://geonet.org.nz/quakes/services/quake/2014p088748.json';
var front = 1; 
ajax({ url: weatherUrl, type: 'json' }, function(data) {
	simply.on('singleClick', function(e) {
		if (e.button === 'up') {
			simply.text({ 
				title: data.features[0].type,
				subtitle: data.features[0].id,
				body: data.features[0].properties.magnitude
			});
		}
		else if (e.button === 'down') {
			simply.text({ 
				title: data.features[0].properties.magnitude,
				subtitle: data.features[0].properties.depth,
				body: data.features[0].properties.intensity
			});
		}
	});
});
