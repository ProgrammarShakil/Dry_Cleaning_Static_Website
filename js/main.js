// carousel js code from carousel website 

$(document).ready(function(){
    
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:25,
        nav: true,
        dots: false,
        loops: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
              items:1,
              nav:true
           },
            600:{
                items:1,
                nav:true
            },
           768:{
              items:1,
              nav:true
          },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

 
});
 

// FAQ js code 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}