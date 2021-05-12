function openNav() {
	document.getElementById("mySidenav").style.width = "16rem";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";
}

$(document).ready(function(){
	$("#profileItem").addClass('sidenavSelected');
});
    