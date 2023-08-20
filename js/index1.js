function loadRap() {
    fetch("data/cinema.json").then(res => res.json()).then(data => {
        let h = "";
        for(let c of data) {
            h +=
            `
            <li id="showSub${c.id}"><a href="javascript:;">
                <div class="flex" style="justify-content: space-around;">
                    <div><img src="${c.img}" alt="${c.alt}"/></div>
                    <div class="name">
                        <div>${c.name}</div>
                        <div><i class="fa-solid fa-location-dot"></i>&ensp;${c.cinema}</div>
                    </div>
                    <div><i class="fa-solid fa-angle-right"></i></div>
                </div></a>
                
                <ul class="submenu-cinema" id="cinema-submenu${c.id}" style="display:none"></ul>
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
                    h = "";
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
                    }
                    let e = document.getElementById("cinema-submenu"+l.cinema_id);
                    if (e !== null)
                        e.innerHTML += h;
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
                        let d = document.getElementById("cinema-submenu"+c.id)
                        if (d.style.display === 'none') {
                            d.style.display = 'block';
                        } else {
                            d.style.display = 'none';
                        }
                        });
                    
                    
                    let s = document.getElementById("showSub"+c.id);
                    let isClicked = false;

                    s.addEventListener("click", function() {
                        if (!isClicked) {
                            s.style.backgroundColor = "#f0ede9";
                            isClicked = true;
                        } else {
                            s.style.backgroundColor = "#fefefe"; 
                            isClicked = false;
                        }
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

function loadReview() {
    fetch("data/review.json").then(res => res.json()).then(data => {
        let h = "";
        h = `<div class="right-name">Review</div>`
        for (let r of data) {
            h += `
            <div class="content-review">
            <a href="#">
                <div>Review ${r.name}</div>
                <div>Đánh giá phim từ: ${r.person}</div>
            </a></div>
            <hr/>
            `
        }

        let e = document.getElementById("review");
            if (e !== null)
                e.innerHTML = h;

    })
};

function selectCinema() {
    fetch("data/cinema.json").then(res => res.json()).then(data => { 
    let a = document.querySelector("select[name='cinema']");
    let b = a.value;
    let h = "";
        for(let c of data) {
            if(c.name.includes(b))
                h +=
                `
                <li id="showSub${c.id}"><a href="javascript:;">
                    <div class="flex" style="justify-content: space-around;">
                        <div><img src="${c.img}" alt="${c.alt}"/></div>
                        <div class="name">
                            <div>${c.name}</div>
                            <div><i class="fa-solid fa-location-dot"></i>&ensp;${c.cinema}</div>
                        </div>
                        <div><i class="fa-solid fa-angle-right"></i></div>
                    </div></a>
                    
                    <ul class="submenu-cinema" id="cinema-submenu${c.id}"  style="display:none"></ul>
                </li>
                `
        }

        let e = document.getElementById("cinema-ticket");
        if (e !== null)
            e.innerHTML = h;
    })
    
}

window.onload = () => {
    loadSubmenu();
    loadRap();
    loadSubMenuRap();
    loadTime();
    loadDate();
    loadReview();
};

