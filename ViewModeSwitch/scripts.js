// Work from class

// -( function( window ) {
// -'use strict';
// -alert('JavaScript wired?');
// +(function(window){
// +	'use strict';
// +	// alert('JavaScript wired?');
//
// -var container = document.getElementById('cbp-vm');
// -var gridSwitch = document.querySelector('a.cbp-vm-grid');
// -var listSwitch = document.querySelector('a.cbp-vm-list');
// +	var container = document.getElementById('cbp-vm');
//
// -gridSwitch.addEventListener('click', function(){
// -	gridSwitch.classList.toggle('cbp-vm-selected', true);
// -	listSwitch.classList.toggle('cbp-vm-selected', false);
// -	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-grid', true);
// -	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-list', false);
// -})
// +	var gridSwitch = document.querySelector('a.cbp-vm-grid');
//
// -listSwitch.addEventListener('click', function(){
// -	listSwitch.classList.toggle('cbp-vm-selected', true);
// -	gridSwitch.classList.toggle('cbp-vm-selected', false);
// -	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-list', true);
// -	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-grid', false);
// -})
// +	var listSwitch = document.querySelector('a.cbp-vm-list');
// +
// +	gridSwitch.addEventListener('click', function(){
// +		gridSwitch.classList.toggle('cbp-vm-selected', true);
// +		listSwitch.classList.toggle('cbp-vm-selected', false);
// +		event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-grid', true);
// +		event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-list', false);
// +	});
// +
// +	listSwitch.addEventListener('click', function(){
// +		listSwitch.classList.toggle('cbp-vm-selected', true);
// +		gridSwitch.classList.toggle('cbp-vm-selected', false);
// +		event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-list', true);
// +		event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-grid', false);
// +	});
//
//  })( window );
