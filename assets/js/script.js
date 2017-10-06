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
      url: 'https://api.instagram.com/v1/users/2279717056/media/recent/?access_token=289336980.5e983c4.4f8829875a6a44c1a402ea8cdb2985ad&code=89880681977544c4b4c3426c5bb66df1',

      error: function() {
        alert("error")
      },

      success: function(data) {
        console.log(data);
        for(var i = 0 ; i < 10; i++){
         $(`#box${i+1}`).attr("src", data.data[i].images.standard_resolution.url);
        }      
      },
      type: 'GET',
      dataType: "jsonp"
   });
     
});
