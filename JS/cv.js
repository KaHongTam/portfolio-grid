$(document).ready(function(){
     $(".tp img").hide();
    $(".tp1 img").hide();
    $(".cz img").hide();
    
    $(".experience_tp").on({
        mouseenter: function(){
            $(".tp img").fadeIn(350);
        },  
        mouseleave: function(){
            $(".tp img").fadeOut(650);
        }, 
    });

    $(".experience_tp1").on({
        mouseenter: function(){
            $(".tp1 img").fadeIn(350);
        },  
        mouseleave: function(){
            $(".tp1 img").fadeOut(650);
        }, 
    });

    $(".experience_cz").on({
        mouseenter: function(){
            $(".cz img").fadeIn(350);
        },  
        mouseleave: function(){
            $(".cz img").fadeOut(650);
        }, 
    });

});