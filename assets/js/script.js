$(document).ready(function(){
  var clickeado = false; 
     var links = $("[href]");
     links.click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
 
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 
                 if (clickeado){
                     $('html,body').animate({scrollTop: targetOffset+800}, 500); 
                     clickeado = false;
                 } 
                 else{
                     $('html,body').animate({scrollTop: targetOffset}, 1000);
                 }   
               return false;
            }
      
       }
   });
     
});
