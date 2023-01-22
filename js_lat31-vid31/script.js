// $( document ).ready( function() {
// 	console.log('Hello World');
// } );

$(function() {
	// console.log('Hello World');
	
	// Set Text Content

		// menyimpan selection
	let head = $('.head');
	let para = $('.para');

	head.text('Setting Text Content');
	para.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit,');

	// Set HTML Content
	$('.01').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</p>');
	$('.02').html('<p>Excepteur sint occaecat cupidatat non proident, ...</p>');
	
	// Get Text Content
	let textHead = head.text();
	let textPara = para.text()

	console.log(textHead);
	console.log(textPara);

	// Get HTML Content
	let class01 = $('.01').html();
	let class02 = $('.02').html();

	console.log(class01);
	console.log(class02);
});