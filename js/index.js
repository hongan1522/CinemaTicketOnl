$(document).ready(() => {
    $("#go").hide();
    $("#go").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $("#go").show("slow");
            $("#menu").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "top": 0,
                "z-index": 99
            });
        }
        else
        {
            $("#go").hide("slow");
            $("#menu").css("position", "static");
        } 
    });
});



