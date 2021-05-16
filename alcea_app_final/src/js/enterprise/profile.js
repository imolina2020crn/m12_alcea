function openNav() {
	document.getElementById("mySidenav").style.width = "16rem";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

	document.getElementById("mainContainer").style.opacity = "0.4";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";

	document.getElementById("mainContainer").style.opacity = "1";
}

function showSettings(){
	window.location.href = '../../pages/settings.html';
}

$(document).ready(function(){
	$("#profileItem").addClass('sidenavSelected');
});
