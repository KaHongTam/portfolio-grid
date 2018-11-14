$(document).ready(function(){
    $(".tp").hide();
    $(".tp1").hide();
    $(".cz").hide();
    
    $(".experience_tp").on({
        mouseenter: function(){
            $(".tp").fadeIn(350);
        },  
        mouseleave: function(){
            $(".tp").fadeOut(650);
        }, 
    });

    $(".experience_tp1").on({
        mouseenter: function(){
            $(".tp1").fadeIn(350);
        },  
        mouseleave: function(){
            $(".tp1").fadeOut(650);
        }, 
    });

    $(".experience_cz").on({
        mouseenter: function(){
            $(".cz").fadeIn(350);
        },  
        mouseleave: function(){
            $(".cz").fadeOut(650);
        }, 
    });

});