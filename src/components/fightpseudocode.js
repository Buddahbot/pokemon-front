picks info form 2 useStates. selectedCardPlayer and selectedCardComp



let winCountPlayer = 0
let winCountComp = 0

for (let i = 0; i < selectedCardPlayer.length; i++) {
	(let y = 0; y < selectedCardComp.length; y++) {
	
if (selectedCardPlayer[i] > selectedCardComp[y]) {
	winCountPlayer += 1
} else if ( selectedCardPlayer[i] < selectedCardComp[y]) {
	winCountComp += 1
} else { 
	winCountPlayer += 0
}

}}

if (winCountPlayer > winCountComp) {

return

‘You won!’
}

if (winCountPlayer < winCountComp) {

return

‘You lost!’
}

if (winCountPlayer === winCountComp) {

return

‘Draw!’
}




