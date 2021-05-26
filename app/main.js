import '../assets/sass/main.scss';

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
