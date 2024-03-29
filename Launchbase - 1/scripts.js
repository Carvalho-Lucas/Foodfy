/* "document" = Manupula elementos da DOM -> Modelagem do HTML (todos elementos do html) "document"+.querySelector+('.classe ou tag "body" ')*/
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

/*Executar uma ação sempre que evento ouvir um "Click no Modal*/
for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}
/*Executar uma ação sempre que botão de fechar for selecionado*/
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})