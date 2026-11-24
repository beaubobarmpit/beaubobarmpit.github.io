const grid = document.getElementById('projects-grid');
const cards = Array.from(grid.getElementsByClassName('card'));
const btnCreated = document.getElementById('sort-created');
const btnUpdated = document.getElementById('sort-updated');

cards.forEach(card => {
    const image = card.querySelector('img');
    const imageSource = image && image.getAttribute('src');
    const imagePath = imageSource && imageSource.split(/[?#]/, 1)[0];
    if (!image || !imagePath || !imagePath.endsWith('/placeholder.png')) {
        return;
    }

    const label = document.createElement('span');
    label.className = 'card-placeholder-label';
    label.textContent = image.alt;
    label.setAttribute('aria-hidden', 'true');
    card.classList.add('card-placeholder');
    card.appendChild(label);
});

function sortCards(property) {
    cards.sort((a, b) => {
        const valA = a.getAttribute(`data-${property}`);
        const valB = b.getAttribute(`data-${property}`);
        return valB.localeCompare(valA);
    });

    cards.forEach(card => grid.appendChild(card));
}

function updateActiveButton(activeBtn, inactiveBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-pressed', 'true');
    inactiveBtn.classList.remove('active');
    inactiveBtn.setAttribute('aria-pressed', 'false');
}

btnCreated.addEventListener('click', () => {
    sortCards('created');
    updateActiveButton(btnCreated, btnUpdated);
});

btnUpdated.addEventListener('click', () => {
    sortCards('updated');
    updateActiveButton(btnUpdated, btnCreated);
});

sortCards('created');
