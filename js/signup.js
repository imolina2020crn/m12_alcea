var selectedOption = "user";

function selectUser(){
  selectedOption = "user";

	// Cercle user enable
  	var element = document.getElementById("userOption");
  	element.classList.remove("circleDisabled");
  	element.classList.add("circleEnabled");

  	// Icon user enable
	var element = document.getElementById("userOptionIcon");
  	element.classList.remove("circleIconDisabled");
  	element.classList.add("circleIconEnabled");

  	// Label user enable
	var element = document.getElementById("userOptionLabel");
  	element.classList.remove("circleLabelDisabled");
  	element.classList.add("circleLabelEnabled");

  	// Cercle enterprise disable
	var element = document.getElementById("enterpriseOption");
  	element.classList.remove("circleEnabled");
  	element.classList.add("circleDisabled");

  	// Icon enterprise disable
	var element = document.getElementById("enterpriseOptionIcon");
  	element.classList.remove("circleIconEnabled");
  	element.classList.add("circleIconDisabled");

  	// Label enterprise disable
  	var element = document.getElementById("enterpriseOptionLabel");
  	element.classList.remove("circleLabelEnabled");
  	element.classList.add("circleLabelDisabled");
}

function selectEnterprise(){

    selectedOption = "enterprise";

	 // Cercle enterprise enable
  	var element = document.getElementById("enterpriseOption");
  	element.classList.remove("circleDisabled");
  	element.classList.add("circleEnabled");

  	// Icon enterprise enable
	   var element = document.getElementById("enterpriseOptionIcon");
  	element.classList.remove("circleIconDisabled");
  	element.classList.add("circleIconEnabled");

  	// Label enterprise enable
	   var element = document.getElementById("enterpriseOptionLabel");
  	element.classList.remove("circleLabelDisabled");
  	element.classList.add("circleLabelEnabled");

  	// Cercle user disable
	   var element = document.getElementById("userOption");
  	element.classList.remove("circleEnabled");
  	element.classList.add("circleDisabled");

  	// Icon user disable
	   var element = document.getElementById("userOptionIcon");
  	element.classList.remove("circleIconEnabled");
  	element.classList.add("circleIconDisabled");

  	// Label user disable
  	var element = document.getElementById("userOptionLabel");
  	element.classList.remove("circleLabelEnabled");
  	element.classList.add("circleLabelDisabled");
}

function showHome() {
  if(selectedOption == "user"){
    window.location.href = '../pages/home.html';
  }else{
    window.location.href = '../pages/enterprise/home.html';
  }
}
