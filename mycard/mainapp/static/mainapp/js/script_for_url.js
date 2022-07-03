document.addEventListener('DOMContentLoaded', function (){
    const anchors = document.querySelectorAll('a[href^="#"]')
    const swup = new Swup();

    // Цикл по всем ссылкам
    for(let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block:'start'
            })
        })
    }
    
});