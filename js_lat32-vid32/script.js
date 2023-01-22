// $( document ).ready( function() {
// 	console.log('Hello World');
// } );

$(function() {
	// console.log('Hello World');
	
	// Set Text Content
	let head = $('.head');
	let para = $('.para');

	$('.klik').click(function() {
		head.text('Setting Text Content');
		para.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit,');
	});

	para.mouseenter(function() {
		$('.01').html('<p>Excepteur sint occaecat cupidatat non proident, ...</p>');
	});
	
});