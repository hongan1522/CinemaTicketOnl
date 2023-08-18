window.onload = () => {
    loadSubmenu();
    loadNews();
    loadCinema()
};

$(document).ready(() => {
    let num = $(".slider-content > div").length;
    let h = "";
    for(let i = 0; i < num ; i++) {
        h += `
            <button class="digit">${i + 1}</button> 
        `;
    }

    $(".buttons :first-child").after(h);

    $(".slider-content").height($(".slider-content img").height());

    let showSlider = (current) => {
        $(".slider-content > div").hide();
        $(".slider-content > div").eq(current).show();

        $("button.digit").removeClass("active");
        $("button.digit").eq(current).addClass("active");
    }

    let current = -1;
    $("button.digit").click(function() {
        current = parseInt($(this).text()) - 1;
        showSlider(current); 
        clearInterval(timer);
        runSlider();       
    });

    $(".next").click(function() {
        current++;
        if(current === num)
            current = 0;
        showSlider(current);
    });

    $(".prev").click(function() {
        current--;
        if(current < 0)
            current = num -1;
        showSlider(current);
    });

    let timer = null;
    let runSlider = () => {
        timer = setInterval(() => {
            $(".next").click();
        }, 2500)
    }
    runSlider();
});

function loadNews() {
    fetch("data/news.json").then(res => res.json()).then(data => {
        let h = "";
        for (let n of data) {
            h += `
            <div class="new flex" >
                <a href="#" class="flex">
                    <div><img src="${n.img}" alt="imange"></div>
                    <div class="new-content">
                        <div>${n.name}</div>
                        <div><span>${n.person} &middot; ${n.time}</span></div>
                        <div>${n.content}</div>
                    </div>
                </a>
            </div>
            <hr/>
            `
        }

        let e = document.getElementById("new")
        if (e !== null)
            e.innerHTML = h;
    });
}

function loadCinema() {
    fetch("data/cinema.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            h += `
            <div class="cinema" >
            <a href="#">
                    <div class="flex">
                        <div><img src="${c.img}" alt="${c.alt}"/></div>
                        <div class="content-cm">
                            <h4>${c.name}</h4>
                            <div>${c.content}</div>
                            <div><i class="fa-solid fa-location-dot"></i>&ensp; ${c.cinema}</div>
                        </div>
                    </div>
                </a>
            </div>
            `
        }

        let e = document.getElementById("cinema")
        if (e !== null)
            e.innerHTML = h;
    });
}