function loadMov() {
    fetch("data/movies.json").then(res => res.json()).then(data => {
        let h ="";
        for (let m of data) {
            h += 
            `<div class="movie">
                <div><img src="${m.img}" alt="Film"/></div>
                <div class="content-mv">
                    <h3>${m.name}</h3>
                    <div>${m.cate}</div>
                </div>
            </div>`;
        }

        let e = document.getElementById("movies");
        if (e !== null)
            e.innerHTML = h;
    })
}

window.onload = () => {
    loadMov();
}
   