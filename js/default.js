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

    let light = document.querySelector(".fa-lightbulb");
    
    light.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    let iframe = document.getElementById("googleMap");
    let showIframeLink = document.getElementById("showIframe");

    showIframeLink.addEventListener("click", function() {
        if (iframe.style.display === "block") {
            iframe.style.display = "none";
        } else {
            iframe.style.display = "block";
        }
        });  
});

function loadSubmenu() {
    fetch("data/cinema.json").then(res => res.json()).then(data => {
        let h ="";
        for (let c of data) {
            h += `
            <li><a href="#">${c.name}</a></li>
            `
        }
        let e = document.getElementById("submenu_menu")
        if (e !== null)
            e.innerHTML = h;
    });
}




