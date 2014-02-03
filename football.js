var footballJSON = 'http://pipes.yahoo.com/pipes/pipe.run?_id=de1f6d4f6cd25289cd15717107011dfe&_render=json';
simply.state.scrollable = scrollable;
ajax({ url: footballJSON, type: 'json' }, function(data) {
		simply.text({ 
			title: data.value.items[0].pubDate,
			subtitle: data.value.items[0].description,
			body: data.value.items[0].title
		});

});
