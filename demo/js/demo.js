var cities = [
		{ID: 1, Name: 'Toronto'},
		{ID: 2, Name: 'Montreal'},
		{ID: 3, Name: 'New York'},
		{ID: 4, Name: 'Buffalo'},
		{ID: 5, Name: 'Boston'},
		{ID: 6, Name: 'Columbus'},
		{ID: 7, Name: 'Dallas'},
		{ID: 8, Name: 'Vancouver'},		
		{ID: 9, Name: 'Seattle'},
		{ID: 10, Name: 'Los Angeles'}
	]

var states = [
		{ id: 1, abbrev: 'AK', full_name: 'Alaska' },
		{ id: 2, abbrev: 'NY', full_name: 'New York' },
		{ id: 3, abbrev: 'FLA', full_name: 'Florida' },
		{ id: 4, abbrev: 'CT', full_name: 'Connecticut' },
		{ id: 5, abbrev: 'GA', full_name: 'Georgia' },
		{ id: 6, abbrev: 'NC', full_name: 'North Carolina' }
	]

var states_via_function = function(typeAhead){
	// Could be an AJAX call in here...
	typeAhead.set_source([
		{ id: 1, abbrev: 'AK', full_name: 'Alaska via Fn' },
		{ id: 2, abbrev: 'NY', full_name: 'New York via Fn' },
		{ id: 3, abbrev: 'FLA', full_name: 'Florida via Fn' },
		{ id: 4, abbrev: 'CT', full_name: 'Connecticut via Fn' },
		{ id: 5, abbrev: 'GA', full_name: 'Georgia via Fn' },
		{ id: 6, abbrev: 'NC', full_name: 'North Carolina via Fn' }
	]);
}

$(function() {
	$('.cities').typeahead({
		source: cities,
		matchProp: 'Name',
		sortProp: 'Name',
		valueProp: 'ID',
		itemSelected: function(item, val, text) {
			$('.selected-message').html('You selected the city ' + text + ' with ID ' + val + '<br />View your browser console for the full item element.')
								  .show();
			console.log(item)
		}
	});

	$('.states').typeahead({
		source: states,
		matchProp: 'full_name',
		sortProp: 'abbrev',
		itemSelected: function(item, val, text) {
			$('.selected-message').html('You selected the state ' + text + ' with ID ' + val + '<br />View your browser console for the full item element.')
								  .show();
			console.log(item)
		}
	});

	$('.states_via_function').typeahead({
		sourceFn: states_via_function,
		requestSource: 'onfocus',
		matchProp: 'full_name',
		sortProp: 'abbrev',
		itemSelected: function(item, val, text) {
			$('.selected-message').html('You selected the state ' + text + ' with ID ' + val + '<br />View your browser console for the full item element.')
								  .show();
			console.log(item)
		}
	});
})