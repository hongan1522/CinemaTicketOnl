function loadLoca() {
    fetch("data/cinemaLoca.json").then(res => res.json()).then(data => {
        let h = "";
        for(let l of data) {
            h +=
            `
            <div class="theater">
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
    let th = document.querySelectorAll(".theater > div");
    for (let t of th) {
        let h4 = t.querySelector("h4");
        if (h4.innerText.indexOf(obj.value) >= 0) {
            t.classList.remove("searchAni");
            setTimeout(() => {
                t.classList.add("searchAni");
            }, 10)
            
        }
    }
};

window.onload = () => {
    loadSubmenu();
    loadLoca();
}