// ========= Player Scoreboard Unfinished =========

export function playerScoreboard(){
    const playerName = document.querySelector('#Name')
const updateName = document.querySelector("input")
const startBtn = document.querySelector('#start') 
const resetBtn = document.querySelector('#reset')
const img = document.createElement('img')

img.src ='./images/snake.jpg'
console.dir(updateName)

const nameUpdate = () => {
    // updateName.textContent = updateName.value
    if (updateName.value === ''){
        return
    }
    playerName.textContent = updateName.value
    updateName.value = null
}
startBtn.addEventListener('click',nameUpdate)

const reset = () => {
    location.reload()
}

resetBtn.addEventListener('click', reset)}
////////////////////////////////////////