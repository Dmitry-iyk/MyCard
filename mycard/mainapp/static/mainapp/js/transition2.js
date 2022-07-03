//Файл действия анимации (Костыли нужны для всех страниц)

window.onload = () => {
    // Получение элементов нажатия
    const but3 = document.getElementById("away");

    // Получение ссылок
    const anchor3 = document.getElementById("home");
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);

    but3.addEventListener('click', e => {
        e.preventDefault();
        console.log(anchor3.href)

        transition_el.classList.add('is-active');

        setInterval(() => {
            window.location.href = anchor3.href;
        }, 500);
        console.log(anchor3.href)
    })
}