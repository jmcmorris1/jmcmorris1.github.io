 $(document).ready(function() {

    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideMe').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);       
            }
        }); 
    });

    $(".pictures").mouseover(function(){
    $(".pictures").css("webkit-animation: ping 0.8s ease-in-out infinite both",
            "animation: ping 0.8s ease-in-out infinite both");
});

    $(window).scroll(function(){

         $('.about-me').typeIt({
            strings: ["I'm like a fly Malcolm X,","buy any jeans necessary." ],
            speed: 150,
            breakLines: false,
            autoStart: false,
            loop: true
        });  
    });

});



