/**
 * Polyfill for responsive tables.
 * http://github.com/edwardcasbon/responsive-tables/
 *
 * The following JavaScript reads through tables and adds the column heading to 
 * the table cell's title attribute.
 *
 * The responsive-tables.css stylesheet displays the cell's title attribute in 
 * the cell at a given width using media queries.
 */
(function(){
	var tables = document.getElementsByTagName("table");
	for(var i=0; i<tables.length; i++) {
		var table = tables[i],
		headings = table.getElementsByTagName("thead")[0].getElementsByTagName("th"),
		rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
		for(var a=0; a<rows.length; a++) {
			var row = rows[a],
				children = row.children,
				counter = 0;
			for(b=0; b<children.length; b++) {
				var el = children[b];
				if(el.tagName === "TD" || el.tagName === "TH") {
					if(el.tagName === "TD" && el.title.length === 0) {
						el.title = headings[counter].innerHTML;
					}
					counter++;
				}
			}
		}
	}
})();