const btn = document.querySelector('.share_btn');
const modalOverlay = document.querySelector('.modal_overlay');
const modalClose = document.querySelector('.fa-times');

btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal_window_visible');
    modalOverlay.classList.add('modal_overlay_visible');

    document.querySelector('body').classList.add('lock');
});

modalClose.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal_overlay_visible');
    document.querySelector('body').classList.remove('lock');

});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal_overlay_visible');
        document.querySelector('body').classList.remove('lock');

    }
});