document.addEventListener('DOMContentLoaded', () => {
    const newListItem = document.querySelector('#new-list-item');
    newListItem.addEventListener('submit', handleNewListItemSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewListItemSubmit = function (event) {
    event.preventDefault();

    const munroListItem = createMunroListItem(event.target);
    const munroList = document.querySelector('#munro-list');
    munroList.appendChild(munroListItem);

    event.target.reset();
}

const createMunroListItem = function (form) {
    const munroListItem = document.createElement('li');
    munroListItem.classList.add('new-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    munroListItem.appendChild(name);

    const date = document.createElement('h3');
    date.textContent = form.date.value;
    munroListItem.appendChild(date);

    return munroListItem;
}

const handleDeleteAllClick = function (event) {
    const readingList = document.querySelector('#munro-list');
    readingList.innerHTML = '';
}