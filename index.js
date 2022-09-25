$(document).ready(function(){

    $("p").click(function(){
        console.log("clicked it");
    });
    
    $("p").click(function(){
        $(this).css("color","red");
    });
    
});
