require(['tour'], function(Tour){
	var tour = new Tour({ 
	
		steps: [
			{el: '#nima1', options: { content: 'nima11111', title: 'nima1' }, placement: 'right', postActions: [], preActions: []},
			{el: '#nima2', options: { content: 'nima22222', title: 'nima2'  }, placement: 'left', postActions: [], preActions: []},			
			{el: '#nima3', options: { content: 'nima33333' }, placement: 'top', postActions: [], preActions: []},			
			{el: '#nima4', options: { content: 'nima44444', title: 'nima4'  }, placement: 'bottom', postActions: [], preActions: []},
			{el: '#nima5', options: { content: 'nima55555', title: 'nima5'  }, placement: '', postActions: [], preActions: []}			
		]
	});
	
	tour.show();
});