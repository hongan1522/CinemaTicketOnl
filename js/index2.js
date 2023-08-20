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
                        <div>${m.cate}</div>
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
        let h3 = movie.querySelector("h3");
        let movieName = h3.textContent.toLowerCase();
        if (movieName.includes(kw)) {
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
   