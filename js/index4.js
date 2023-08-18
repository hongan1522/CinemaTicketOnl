function loadSeatMap() {
    fetch("data/seat.json").then(res => res.json()).then(data => {
        let h ="";
        for (let s of data) {
            h += `
            <div class="flex seats" style="background-color:${s.bgColor}">
                <div class="seat"></div>
                <div>&ensp;${s.type}</div>
            </div>
            `
        };

        let e = document.getElementById("seats")
        if (e !== null) {
            e.innerHTML = h;
        }
        
    });
    
}

function selectCinema() {
    fetch("data/seatMap.json").then(res => res.json()).then(data => {
        fetch("data/cinema.json").then(res => res.json()).then(data1 => {
        let h ="";
        let a = document.querySelector("select[name='cinema']");
        let cinema_id;
        for (let s of data1) {
            if(s.name === a.value) {
                cinema_id = s.id
                alert(cinema_id)
            }
        }
        for (let s of data) {
            if (s.cinema_id === cinema_id) {
            for (let i = 0; i < s.VIP; i++) {
            h += `
            <div class="flex seats"">
                <div class="seat vip">C${i+1}</div>
            </div>
            `
            if((i+1) %5 === 0)
            h+=`<div style="display:block"></div>`
            }
            for (let i = 0; i < s.Standard; i++) {
            h += `
            <div class="flex seats">
                <div class="seat normal"><a href="#">B${i+1}</a></div>
            </div>
            `
            if((i+1) % 5 == 0)
            h+=`<div style="display:block"></div>`
            }
            for (let i = 0; i < s.Couple; i++) {
            h += `
            <div class="flex seats">
                <div class="seat couple" style="width: 60px;">A${i+1}</div>
            </div>
            `
            if((i+1) %5 === 0)
            h+=`<div style="display:block"></div>`
            
            }}
            alert(h)
        };

        let e = document.getElementById("seatMap")
        if (e !== null) {
            e.innerHTML = h;
            alert(e)
            alert(h)
        }
    });
    });
}

window.onload = () => {
    loadSubmenu();
    // loadSeatMap();
    selectCinema();
}