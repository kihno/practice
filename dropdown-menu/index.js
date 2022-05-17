const dropdown = (() => {
    const menu = document.getElementById('dropdown');
    const items = document.querySelectorAll('.item');
    const display = document.getElementById('display');

    menu.addEventListener('click', toggleItems);

    function toggleItems() {
        items.forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
                item.addEventListener('click', selectItem);
            }
        });
    }

    function selectItem(e) {
        let selection = e.target.textContent;
        display.textContent = selection;
    }
})();