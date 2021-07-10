const choicesectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const botscorespan = document.querySelector('[data-bot-score]')
const player1sScoreSpan =  document.querySelector('[data-player1-score]')
const CHOICES = [
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
        const choicesName = choicesectionButton.dataset.choices
        const CHOICES =  CHOICES.find(choices => choices.name === choicesName)
             makechoices(choices)

    })
}
    );
    function makechoices(choices){
        const botchoices  = randomchoices()
            const player1Winner = isWinner(choices, botchoices)
            const botWinner = isWinner(botchoices,choices)
            
            addchoicesresults(botchoices, botWinner)
            addchoicesresults(choices, player1Winner)
    
            if(player1Winner) incrementresults(player1scorespan)
            if(botWinner) incrementresults(botresultsscorespan)
    }
     function incrementresults(resultsscorespan) {
resultsspan.innertext = parseInt(resultsscorespan.innertext) + 1

     }  
function addchoicesresults(choices, Winner){
    const div = document.createElement('div')
    div.innerText = choice.emoji
    div.classList.add('results')
    if (Winner)  div.classList.add('Winner')
    finalColumn.after(div)
}

function isWinner(selection,opponentchoices) {
    return choices.beats === opponentchoices.name

}

function randomchoices() {
    const randomchoices = Math.floor(Math.random() *choices.length)
    return choices[randomchoices]
};
console.log("conected");