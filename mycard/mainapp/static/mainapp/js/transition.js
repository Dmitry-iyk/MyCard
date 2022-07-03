// Файл обеспечивает плавный переход страницы

window.onload = () => {
    // Получение элементов нажатия
    const but1 = document.getElementById("bt11");
    const but2 = document.getElementById("bt22");

    // Получение ссылок
    const anchor = document.getElementById("get_href");
    const anchor2 = document.getElementById("get_href2");
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);

    but1.addEventListener('click', e => {
        e.preventDefault();
        transition_el.classList.add('is-active');

        setInterval(() => {
            window.location.href = anchor.href;
        }, 500);
    })


    but2.addEventListener('click', e => {
        e.preventDefault();
        console.log(anchor2.href)

        transition_el.classList.add('is-active');

        setInterval(() => {
            window.location.href = anchor2.href;
        }, 500);
        console.log(anchor2.href)
    })
}