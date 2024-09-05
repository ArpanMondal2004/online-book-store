// Add this JS to your existing script.js file

document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getAttribute('data-title').toLowerCase();

        if (title.includes(filter)) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
});
