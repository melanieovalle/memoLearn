const cards = document.querySelectorAll('.green-flashcard');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const topicName = card.querySelector('h2').innerText;
        alert('You selected: ${topicName}')
    })
})


