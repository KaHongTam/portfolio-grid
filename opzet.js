window.onload = function() {

var h2Text = " Why hello there, welcome to my site.";
var i = 0;

function typeWriter(text){
    console.log(i);
    //console.log(text.length);
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;            
        setTimeout(function(){ typeWriter(h2Text) }, 100);
    }
}

typeWriter(h2Text);
}