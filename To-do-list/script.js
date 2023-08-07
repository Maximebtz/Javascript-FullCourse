const addButtonEl = document.getElementById("btn");
const todoCard = document.querySelector('#todoCard');
let taskCount = 1;

    addButtonEl.addEventListener("click", function() {

        // Cloner la première carte ou créer une nouvelle carte si c'est la première tâche
        const clonedCard = taskCount === 1 ? todoCard : todoCard.cloneNode(true);

        // Modifier le texte du textarea dans la carte clonée
        const textarea = clonedCard.querySelector('.task');
        textarea.textContent = `Task ${taskCount}`;

        // Ajouter la carte clonée au conteneur des cartes
        const todoCardsContainer = document.getElementById("todoCards");
        todoCardsContainer.appendChild(clonedCard);


        // Ajouter la fonctionnalité de suppression à chaque bouton de suppression
        const deleteButton = clonedCard.querySelector('.delBtn');
        deleteButton.addEventListener('click', function() {
            deleteCard(clonedCard);
        });


        // Augmenter le compteur de tâches
        taskCount++;
    });


    
    // Fontion pour delete la card
    function deleteCard(card) {
        card.remove();
    }
    
    const deleteButtons = document.querySelectorAll('.delBtn');

    // Parcourir toute les cards pour supprimer uniquement celle qu'on souhaite
    deleteButtons.forEach(function(deleteButton) {
        deleteButton.addEventListener('click', function() {
        const card = deleteButton.parentNode;
        if (card) {
            deleteCard(card);
        }
        });
    });