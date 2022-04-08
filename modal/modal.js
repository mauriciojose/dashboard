
var modals = new Map();

function initModal(){
    
    const modais = document.querySelectorAll(`.modal`);

    for (let index = 0; index < modais.length; index++) {
        const element = modais[index];
        modals.set(element.id, element);

        element.querySelector('.close-modal').onclick = function() {
            closeModal(element.id);
        } 
    }
}

function openModal(id) {
    modals.get(id).style.display = "flex"
}

function closeModal(id) {
    modals.get(id).style.display = "none";
}

initModal();