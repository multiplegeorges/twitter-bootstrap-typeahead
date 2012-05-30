Typeahead
============

An extension of the Twitter Bootstrap Typeahead plugin (as of v2.0.2)<br />
<http://twitter.github.com/bootstrap/javascript.html#typeahead>

Demo
-----------------
http://tcrosen.github.com/twitter-bootstrap-typeahead/

Required
-----------------
* Twitter Bootstrap 2.0.2+
* jQuery 1.7.1+

About
-----
All the thanks in the world to [@mdo](https://twitter.com/#!/mdo) and [@fat](https://twitter.com/#!/fat) of [@twitter](https://twitter.com/) for the wonderful Bootstrap utility.<br />
I required more functionality out of the typeahead plugin so I created this simple extension.  I do plan to add more features in the future.

Changes from the Original
-------

**Methods:**

All original methods are now overridable:

matcher<br />
sorter<br />
highlighter<br />
select<br />
render<br />

**New Options:**

**valueProp**<br />
Default: *id*<br />
Description: The object value that is returned when an item is selected.

**matchProp**<br />
Default: *name*<br />
Description: The object property to match the query against.

**sortProp**<br />
Default: *name*<br />
Description: The object property to use when sorting the items.

**itemSelected**<br />
Default: *function (item, val, text) {}*<br />
Description: The callback function that is invoked when an item is chosen.<br />

+ item: the HTML element that was selected

+ val: value of the *valueProp* property

+ text: value of the *textProp* property

**sourceFn**<br />
Default: undefined<br />
Description: If you are loading the source data via AJAX, set this option to the function that will load the data. It receives the Typeahead instance as the only parameter. This function must, at some point, call `typeAhead.setSource(data)`, where `data` is the source data.<br/>

Example:

	var getMyData = function(typeAhead){
		$.get('/my/ajax/endpoint', function(responseData){
			typeAhead.set_source(responseData);
		});
	}

**requestSource**<br />
Default: undefined<br />
Description: When loading source data via AJAX, this specifies when to load the data. Possible values: <br />

+ `onload`: Immediately when the Typeahead is created

+ `onfocus`: When the text field comes into focus


Sample Usage
------------
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

	$(function() {
		$('#myElement').typeahead({
			source: cities,
			matchProp: 'Name',
			sortProp: 'Name',
			valueProp: 'ID',
			itemSelected: function(item, val, text) {
				alert('You selected the city ' + text + ' with ID ' + val)
				console.log(item)
			}
		})
	})

A full working example is included in this project and is now available at http://tcrosen.github.com/twitter-bootstrap-typeahead/