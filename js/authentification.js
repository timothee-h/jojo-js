$(document).ready(function(){
 
	$(".header--nav--user--pseudo").val(localStorage.getItem("currentUser"));
	
	$(".header--nav--user--btn").on("click", function(){
		var user = $(".header--nav--user--pseudo").val();
		localStorage.setItem("currentUser", user);
		console.log(user +" connecté");
		$(".header--nav--user--pseudo").val(localStorage.getItem("currentUser"));
		location.reload();
	});
	
	
});