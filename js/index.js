window.onload = () => {
    loadSubmenu();
};

$(document).ready(() => {
    let num = $(".slider-content > div").length;
    let h = "";
    for(let i = 0; i < num ; i++) {
        h += `
             <button class="digit">${i + 1}</button> 
        `;
    }

    $(".buttons :first-child").after(h);

    $(".slider-content").height($(".slider-content img").height());

    let showSlider = (current) => {
        $(".slider-content > div").hide();
        $(".slider-content > div").eq(current).show();
    }

    let current = -1;
    $("button.digit").click(function() {
        current = parseInt($(this).text()) - 1;
        showSlider(current);        
    });

    $(".next").click(function() {
        current++;
        if(current === num)
            current = 0;
        showSlider(current);
    });

    $(".prev").click(function() {
        current--;
        if(current < 0)
            current = num -1;
        showSlider(current);
    });
});