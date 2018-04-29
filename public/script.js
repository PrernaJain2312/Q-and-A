$(document).ready(function(){
    $('#login-button').click(function(){
        $('#login-button').fadeOut("slow",function(){
            $(".login-wrap").fadeIn();
            TweenMax.from(".login-wrap", .4, { scale: 0, ease:Sine.easeInOut});
            TweenMax.to(".login-wrap", .4, { scale: 1, ease:Sine.easeInOut});
        });
    });

    $(".close-btn").click(function(){
        TweenMax.from(".login-wrap", .4, { scale: 1, ease:Sine.easeInOut});
        TweenMax.to(".login-wrap", .4, { left:"-10%", scale: 0, ease:Sine.easeInOut});
        $(".login-wrap").fadeOut(800, function(){
            $("#login-button").fadeIn(200);
        });
    });
});