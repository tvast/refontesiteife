/*document.getElementById("fold").addEventListener("click", function(){

	var x = document.getElementsByClassName("quotes")
    x.style.display = "block";
	console.log("coucou")
});*/



$(document).ready(function(){
  $("#fold").click(function(){
    $(".quotes").hide();
    console.log("coucou")
});

$("#fold2").click(function(){
    $(".quotes").show();
    console.log("coucou2")
});
});