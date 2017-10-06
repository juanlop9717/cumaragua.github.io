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
    })


     // Instagram Request
     let apiKey = "5e983c4725ec4fbea6ebdbe7be6fdeb2";

     $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5e983c4725ec4fbea6ebdbe7be6fdeb2',

      error: function() {
        alert('error');
      },

      success: function(data) {
       alert('yes');
       console.log(data)
      },
      type: 'GET',
      dataType: "jsonp"
   });
     
});
