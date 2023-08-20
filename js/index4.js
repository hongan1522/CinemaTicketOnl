function loadSeat() {
    fetch("data/seatMap.json").then(res => res.json()).then(data => {
        fetch("data/cinema.json").then(res => res.json()).then(data1 => {
        let h ="";
        let a = document.querySelector("select[name='cinema']");
        let cinema_id;
        for (let s of data1) {
            if(s.name === a.value) {
                cinema_id = s.id
            }
        }
        for (let s of data) {
            if (s.cinema_id === cinema_id) {
                let count = 0;
                let char = 65;
                let currentRow = '';
                for (let i = 0; i < s.Couple; i++) {
                    if (count === 0) {
                        currentRow += `<tr><td>${String.fromCharCode(char)}</td>`;
                    }
                    currentRow += `
                        <td id="seatCoup${i}"><div class="seat couple" data-price=120.000><a href="#">${String.fromCharCode(char)}${i%10+1}</a></div></td>
                    `
                    count++;
                    if (count >= 10) {
                        currentRow += '</tr>';
                        h += currentRow;
                        currentRow = '';
                        count = 0;
                        char++;
                    }
                }

                for (let i = 0; i < s.Standard; i++) {
                    if (count === 0) {
                        currentRow += `<tr><td>${String.fromCharCode(char)}</td>`;
                    }
                    currentRow += `
                    <td id="seatStand${i}"><div class="seat normal" data-price=80.000><a href="#">${String.fromCharCode(char)}${i%10 + 1}</a></div></td>
                    `;
                    count++;
                    if (count >= 10) {
                        currentRow += '</tr>';
                        h += currentRow;
                        currentRow = '';
                        count = 0;
                        char++;
                    }
                }
                
                for (let i = 0; i < s.VIP; i++) {
                    if (count === 0) {
                        currentRow += `<tr><td>${String.fromCharCode(char)}</td>`;
                    }
                    currentRow += `
                    <td id="seatVip${i}"><div class="seat vip" data-price=150.000><a href="#">${String.fromCharCode(char)}${i%10+1}</a></div></td>
                    `
                    count++;
                    if (count >= 10) {
                        currentRow += '</tr>';
                        h += currentRow;
                        currentRow = '';
                        count = 0;
                        char++;
                    }
                }
            }

            h+= `
            <tr style="background-color: gainsboro; text-align: center; height: 30px;">
                <td colspan="11" >Màn hình</td>
            </tr>
            `
        };

        let e = document.getElementById("seatMap")
        if (e !== null) {
            e.innerHTML = h;
        }

        let seats = document.querySelectorAll(".seat");
        seats.forEach(seat => {
            seat.addEventListener("click", function () {
                seat.classList.toggle("selected"); 
                total(); 
                })
            });

        });
    })
}           

function total() {
    let selectedSeats = document.querySelectorAll(".seat.selected");
    let totalPrice = 0;

    selectedSeats.forEach(seat => {
        let price = parseInt(seat.getAttribute("data-price"))
        totalPrice += price;
    });

    let formattedTotalPrice = totalPrice.toLocaleString("vi-VN", {
        currency: "VND",
        maximumFractionDigits: 0
    });

    let totalPriceSpan = document.getElementById("totalPrice");

    totalPriceSpan.textContent = formattedTotalPrice + ".000 VNĐ";
}


window.onload = () => {
    loadSubmenu();
    loadSeat()

    
}