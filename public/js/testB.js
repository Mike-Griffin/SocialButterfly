'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".edit-button").click(clickEdit);
	$(".glyphicon-unchecked").click(clickComplete);
}

function clickComplete(e) {
	ga("send", "event", 'add', 'click');

}
  
function clickEdit(e) {
	ga('send', "event", 'edit', 'click');
}
