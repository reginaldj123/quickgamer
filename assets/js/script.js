const choicesectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const botscorespan = document.querySelector('[data-bot-score]')
const player1sScoreSpan =  document.querySelector('[data-player1-score]')
const choices = [
    {
        name:'Rock',
        emoji:'✊🏼',
        beats:'Scissors',
    },
    {   name:'Paper',
        emoji:'✋🏻',
        beats:'Rock',
    },
     
    {
        name:'Scissors',
        emoji:'✌🏼',
        beats:'Paper',
    }
];
choicessectionButtons.forEach(choicesectionButton => {
    choicessectionButton.addEventListener('click',  e => {
        const choicesName = choicesectionButton.dataset.selection
        const choices =  Selection.find(choices => choices.name === choicesName)
             makeSelection(choices)

    })
}
    );
    function makechoices(choices){
        const botchoices  = randomSelection()
            const player1Winner = isWinner(Player1choices, player1Winner)
            const botWinner = isWinner( botchoices,botWinner)
            
            addchoicesresults(botchoices,botWinner)
            addchoicesresults()

            if (player1Winner)  incrementresults(player1score)
            if (botWinner) incrementresults(botresults)
    }
     function incrementresults(resultsspan) {
resultsspan.innertext = parseInt(resultsspan.innertext) + 1

     }  
function addchoicesresults(choices, Winner){
    const div = document .createElement('div')
    div.innerText = choice.emoji
    div.classList.add('result-choices')
    if (Winner)  div.classList.add('Winner')
    finalColumn.after(div)
}

function isWinner(selection,opponentchoices) {
    return choices.beats === opponentchoices.name

}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() *choices.length)
    return choices[randomIndex]
};
console.log("conected");