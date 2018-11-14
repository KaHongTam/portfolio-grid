window.onload = function() {

    // var h2Text = document.getElementById("typing");
    // var h2Text = h2Text.innerHTML;
    //console.log(h2Text);
    var h2Text = "Hi, Welcome to Kampany";
    var i = 0;
    
    function typeWriter(text){
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;            
            setTimeout(function(){ typeWriter(h2Text) }, 45);
        }
    }
    
    typeWriter(h2Text);
    }