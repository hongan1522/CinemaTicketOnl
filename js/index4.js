window.onload = () => {
    loadSubmenu();
    loadSeatMap()
}

function loadSeatMap() {
    fetch("data/seat.json").then(res => res.json()).then(data => {
        let h ="";
        for (let s of data) {
            h += `
            <div class="flex seats">
                <div class="seat normal"></div>
                <div>&ensp;${s.name}</div>
            </div>
            `
        };

        let e = document.getElementById("seats")
        if (e !== null)
            e.innerHTML = h;
    });
}