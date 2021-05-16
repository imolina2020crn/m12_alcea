var selectedTab = "treball";

$(document).ready(function(){
	$("#homeItem").addClass('sidenavSelected');
	$('.tabs').tabs();
});

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

function showCreateJob() {
	if(selectedTab == "treball"){
		window.location.href = '../../pages/enterprise/search_job.html';
	}else if(selectedTab == "repoblacio"){
		window.location.href = '../../pages/enterprise/search_home.html';
	}else{
		window.location.href = '../../pages/enterprise/create_event.html';
	}
}

function showFilters(){
	window.location.href = '../../pages/filtros.html';
}

function showComments(){
	window.location.href = '../../pages/comments.html';
}

function selectTreball(){
	selectedTab = "treball";
}

function selectRepoblacio(){
	selectedTab = "repoblacio";
}

function selectEsdeveniments(){
	selectedTab = "esdeveniments";
}
