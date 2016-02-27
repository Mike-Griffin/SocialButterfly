'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".addBtn").click(clickAdd);
	$(".glyphicon-unchecked").click(clickComplete);
}

function clickAdd(e) {
	ga("send", "event", 'add', 'click');
}

function clickComplete(e) {
	ga("send", "event", 'complete', 'click');
}
