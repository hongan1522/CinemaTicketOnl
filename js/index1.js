// $(document).ready(() => {
//     let day = document.getElementsByClassName(".date")

//     let c = document.getElementsByClassName("cinema-ticket").
// });

function loadRap() {
    fetch("data/cinema.json").then(res => res.json()).then(data => {
        let h = "";
        for(let c of data) {
            h +=
            `
            <li><a href="#">
                <div class="flex" style="justify-content: space-around;">
                    <div><img src="${c.img}" alt="${c.alt}"/></div>
                    <div class="name">
                        <div>${c.name}</div>
                        <div><i class="fa-solid fa-location-dot"></i>&ensp;${c.cinema}</div>
                    </div>
                    <div><i class="fa-solid fa-angle-right"></i></div>
                </div>
            </a></li>
            `
        }

        let e = document.getElementById("cinema-ticket");
        if (e !== null)
            e.innerHTML = h;
    })
};

window.onload = () => {
    loadRap();
}