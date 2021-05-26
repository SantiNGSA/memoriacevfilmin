import '../assets/sass/main.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

window.addEventListener('load', () => {
    initEventsInSidebar();

})

const initEventsInSidebar = () => {
    const sideItems = document.querySelectorAll('.menu_item');
    sideItems.forEach(i => {
        i.addEventListener('click', (ev) => {
            sideItems.forEach(i_ => {
                if (!ev.composedPath().includes(i)) {
                    i_.classList.remove('opened');
                }
            })
            if (i.querySelector('.submenu')) {
                i.classList.toggle('opened');
            }
        })
    })
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });