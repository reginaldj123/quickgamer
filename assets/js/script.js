const choicesectionButtons = document.querySelectorAll('[data-selection]');
const choices = [
    {
        name:Rock;
        emoji:✊🏼;
        beats:Scissors;
    },
    {   name:Paper;
        emoji:✋🏻;
        beats:Rock;
    },
     
    {
        name:Scissors;
        emoji:✌🏼;
        beats:Paper;
    }
];
choicesectionButtons.forEach(choicesectionButton => {
    selectionButton.addEventListener('click',  e => {
        const choicesName = selectionButton.dataset.selection 
        makeSelection(selectionName)

    });
}
    );
    function makechoices(choices)
console.log("conected");