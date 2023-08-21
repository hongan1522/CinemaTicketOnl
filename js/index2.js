$(document).ready(() => {
    const movies = ["Kinh Dị", "Hoạt Hình", "Chính Kịch", "Phiêu Lưu", "Lãng Mạn", "Khoa Học Viễn Tưởng", "Hài"];
    $("#search").keyup(function() {
        let h ="";
        let s = $(this).val().toLowerCase();
        for (let c of movies) {
            if(c.toLowerCase().indexOf(s) >= 0)
                h += `
                <li><a href="javascript:;">${c}</a></li>
                `
        }
        $("#suggest").html(h);
        $("ul#suggest").css("display", "block !important");
    });

    $("#suggest").on("click", "a", function() {
        $("#search").val($(this).text());
        $("#suggest").html(""); 
        setTimeout(function() {
            searchMV(document.getElementById("search"));
        }, 500);
        $("#suggest").css("display", "none");
    });
})

function loadMov() {
    fetch("data/movies.json").then(res => res.json()).then(data => {
        let h ="";
        for (let m of data) {
            h += 
            `<div class="movie wow animate__zoomInDown">
                <a href="#">
                    <div><img src="${m.img}" alt="Film"/></div>
                    <div class="content-mv">
                        <h3>${m.name}</h3>
                        <div id="cate">${m.cate}</div>
                    </div>
                </a>
            </div>`;
        }

        let e = document.getElementById("movies");
        if (e !== null)
            e.innerHTML = h;
    })
}

function searchMV(obj) {
    let kw = obj.value.toLowerCase();
    let movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        let cate = movie.querySelector("div[id=cate]");
        let moviecate = cate.textContent.toLowerCase();
        if (moviecate.includes(kw)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}

window.onload = () => {
    loadSubmenu();
    loadMov();
}
   