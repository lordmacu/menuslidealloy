var args = arguments[0] || {};

function openmenu() {

	var animation = Titanium.UI.createAnimation();
	animation.left = "40%";
	animation.duration = 100;
	$.contentwindow.animate(animation);
}


function closemenu() {
	var animation = Titanium.UI.createAnimation();
	animation.left = "0";
	animation.duration = 100;
	$.contentwindow.animate(animation);
}

$.tablemenu.addEventListener('click', function(e)
{
     closemenu();   
});