$(document).ready(() => {
    const cinemas = ["CGV", "Beta", "Cinestar", "Lotte", "Galaxy", "BHD Star", "Mega GS"];
    $("#search").keyup(function() {
        let h ="";
        let s = $(this).val().toLowerCase();
        for (let c of cinemas) {
            if(c.toLowerCase().indexOf(s) >= 0)
                h += `
                <li><a href="javascript:;">${c}</a></li>
                `
        }
        $("#suggest").html(h);
        $("#suggest").css("display", "block");
    });

    $("#suggest").on("click", "a", function() {
        $("#search").val($(this).text());
        $("#suggest").html(""); 
        setTimeout(function() {
            search(document.getElementById("search"));
        }, 500);
        $("#suggest").css("display", "none");
    });
})

function loadLoca() {
    fetch("data/cinemaLoca.json").then(res => res.json()).then(data => {
        let h = "";
        for(let l of data) {
            h +=
            `
            <div class="theater wow animate__backInRight">
            <a href="#">
                <div class="flex">
                    <div style="padding-left: 50px;"><img src="${l.img}" alt="${l.alt}"/></div>
                    <div class="content">
                        <h4>${l.name}</h4>
                        <div>${l.location}</div>
                    </div>
                </div>
            </a>
        </div>
            `
        }

        let e = document.getElementById("mvTheater");
        if (e !== null)
            e.innerHTML = h;
    })
};

function search(obj) {
    let kw = obj.value.toLowerCase();
    let theaters = document.querySelectorAll(".theater");

    theaters.forEach(theater => {
        let h4 = theater.querySelector("h4");
        let theaterName = h4.textContent.toLowerCase();
        if (theaterName.includes(kw)) {
            theater.style.display = "block";
        } else {
            theater.style.display = "none";
        }
    });
}



window.onload = () => {
    loadSubmenu();
    loadLoca();
}