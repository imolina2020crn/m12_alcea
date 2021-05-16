function openNav() {
	document.getElementById("mySidenav").style.width = "16rem";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	document.getElementById("mainTabs").style.opacity = "0.4";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";
	document.getElementById("mainTabs").style.opacity = "1";
}

$(document).ready(function(){
	$("#homeItem").addClass('sidenavSelected');
	$('.tabs').tabs();
});
