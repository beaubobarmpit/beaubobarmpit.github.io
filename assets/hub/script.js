const grid = document.getElementById('projects-grid');
const cards = Array.from(grid.getElementsByClassName('card'));
const btnCreated = document.getElementById('sort-created');
const btnUpdated = document.getElementById('sort-updated');

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
