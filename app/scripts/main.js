require(['tour'], function(Tour){
	var tour = new Tour({ 
		//el : $('#nima'), 
		//content: 'sklsfdjklsdfjljklsdf222222',
		//model: {
		//	title: 'test',
		//	content: 'sdfsdfsfsdf'
		//}
		
		steps: [
			{el: '#nima1', options: { content: 'nima11111', title: 'nima' }, postActions: [], preActions: []},
			{el: '#nima2', options: { content: 'nima22222' }, postActions: [], preActions: []},			
			{el: '#nima3', options: { content: 'nima33333' }, postActions: [], preActions: []},			
			{el: '#nima4', options: { content: 'nima44444' }, postActions: [], preActions: []}			
		]
	});
	
	//tour.render();
	tour.show('', 'right');
	//tour.hide();
	//sdfsdfsf
});