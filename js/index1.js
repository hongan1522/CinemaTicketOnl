function loadRap() {
    fetch("data/cinema.json").then(res => res.json()).then(data => {
        let h = "";
        for(let c of data) {
            h +=
            `
            <li id="showSub${c.id}"><a href="#">
                <div class="flex" style="justify-content: space-around;">
                    <div><img src="${c.img}" alt="${c.alt}"/></div>
                    <div class="name">
                        <div>${c.name}</div>
                        <div><i class="fa-solid fa-location-dot"></i>&ensp;${c.cinema}</div>
                    </div>
                    <div><i class="fa-solid fa-angle-right"></i></div>
                </div></a>
                
                <ul class="submenu-cinema" id="cinema-submenu${c.id}" style="display: none;"></ul>
            </li>
            `
        }

        let e = document.getElementById("cinema-ticket");
        if (e !== null)
            e.innerHTML = h;
    })
};


function loadSubMenuRap() {
    fetch("data/cinema.json").then(res => res.json()).then(data => { 
        fetch("data/cinema-timeline.json").then(res => res.json()).then(data1 => {
            let h = "";
            for(let c of data) {
                for (let l of data1) {
                    if(c.id === l.cinema_id) {
                        h = `
                        <li><a href="#">
                            <div>
                                <div style = "padding: 5px">${l.name}</div>
                                <div style = "padding: 5px"><span>${l.loca}</span></div>
                                <div id="time-line${l.id}" class="flex"></div>
                            </div>
                            
                        </a></li>
                        `
                        
                        let e = document.getElementById("cinema-submenu"+c.id);
                        if (e !== null)
                            e.innerHTML += h;
                    }
                }
            }
        })
    })
};

function loadTime() {
    fetch("data/cinema.json").then(res => res.json()).then(data => { 
        fetch("data/cinema-timeline.json").then(res => res.json()).then(data1 => {
            let h = "";
            for(let c of data) {
                for (let l of data1) {
                    h = "";
                    if(c.id === l.cinema_id) {
                        for (let i = 0; i < (l.time).length; i++) {
                            h+= `
                            <div>
                                <div style = "padding: 5px"><a href="#"><input type="button" value="${l.time[i]}"></a></div>
                            </div>
                            `
                    }
                    let e = document.getElementById("time-line" + l.id);
                        if (e !== null)
                            e.innerHTML = h;

                    document.getElementById("showSub"+c.id).addEventListener("click", function showCinema()  {
                        document.getElementById("cinema-submenu"+c.id).style.display='block';
                        });
                    }

                }
            }
            
        })
    })
};

function loadDate() {
    fetch("data/date.json").then(res => res.json()).then(data => {
        let h = "";
        for (let d of data) {
            h += `
                <li><a href="#">${d.date}</br><span>${d.day}</span></a></li>
            `
        }
    
        let e = document.getElementById("date");
            if (e !== null)
                e.innerHTML = h;
    })
}

window.onload = () => {
    loadRap();
    loadSubMenuRap();
    loadTime();
    loadDate();
};

