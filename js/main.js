$(document).ready(function(){
  
  $("[id^='valideP']").on("click",function(e){ 
		//console.log("valide");
    $( "#template1").css( "display", "none");
    $( "#template2").fadeIn();
  });

	
	//Récup données
	if($("#json1").length){//si on est sur la page ex1
		var typeExo = 1;
		var answers = [];
		if(localStorage.getItem("answers1") != null) {
			answers = JSON.parse(localStorage.getItem("answers1"));
		}
		var currentExo = answers.length;
		var data = ex1;
		var enonce = ex1[currentExo].Enonce;
		var solution = ex1[currentExo].Solution;
	} 
	if($("#json2").length){
		var typeExo = 2;
		var answers = [];
		if(localStorage.getItem("answers2") != null) {
			answers = JSON.parse(localStorage.getItem("answers2"));
		}
		var currentExo = answers.length;
		var data = ex2;
		var enonce = ex2[currentExo]["Algo errone"];
		var solution = ex2[currentExo]["Algo sans erreur"];
	} 
	if($("#json3").length){
		var typeExo = 3;
		var answers = [];
		if(localStorage.getItem("answers3") != null) {
			answers = JSON.parse(localStorage.getItem("answers3"));
		}
		var currentExo = answers.length;
		var data = ex3;
		var enonce = ex3[currentExo]["Algorithme a afficher"];
		var solution = ex3[currentExo]["Reponse attendue"];
	}
	
	
	$("[id^='enonceP'] p").html(enonce);
	$("[id^='numP'] p").html("Exercice "+ parseInt(currentExo + 1) + " sur " + data.length);
	$("[id^='solutionP'] p").html(solution);
	
	
	$("[id^='valideP']").on("click", function(){
		var reponse = $("#blockReponseP2 p").text();
		//re-afficher réponse :
		$("#reponseP3 p").html(reponse);
		// enregistrer réponse :
		answers[currentExo] = reponse;
		answersSave = JSON.stringify(answers);
		console.log(answersSave);
		localStorage.setItem("answers"+typeExo, answersSave);
	});
	
	
	$("#suivant").on("click", function(){
		location.reload();
	});
	
	
	/*
	
	**********cour************
	
	*/
	
	    $("#menuCour > ul > li > p").click(function(){
    $("#menuCour").addClass("col-md-2 col-sm-2 col-xs-2")
  });
  
  
  $(".sousMenu").hide();

  $(".titreMenuCour").on("click",function(){
    if($(this).not($(this)).hasClass('activeS')){
      $('.activeS').removeClass("activeS").slideToggle();
    }
    else{
      $('.activeS').removeClass("activeS").slideToggle();
      $(this).next('.sousMenu').addClass("activeS").slideToggle();
    }
  });
  
    $(".ContenuCour").hide();

  $(".titreSousMenu").on("click",function(){
    if($(this).not($(this)).hasClass('activeC')){
      $('.activeC').removeClass("activeC").slideToggle();
    }
    else{
      $('.activeC').removeClass("activeC").slideToggle();
      $(this).next('.ContenuCour').addClass("activeC").slideToggle();
    }
  });
	
});