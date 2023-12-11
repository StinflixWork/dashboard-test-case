document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.burger-icon')) {
        targetItem.classList.toggle('show-menu');
        document.querySelector('.sidebar__menu').classList.toggle('show-menu');
    }
}