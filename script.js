import{drawSnake, snakeSpeed, updateSnake, snakeBody, snakeHead, snakeIntersection}from'./snake.js'
import { drawFood, updateFood} from "./food.js"
import { outsideGrid } from './grid.js'

// Player Scoreboard Unfinished
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

resetBtn.addEventListener('click', reset)

/* Snake Game */
let lastRenderTime = 0
let gameOver = false
export const gameBoard = document.querySelector('#gameboard')
gameBoard.getBoundingClientRect
function gameLoop(currentTime){
    
   
    window.requestAnimationFrame(gameLoop)
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if(secondsSinceLastRender < 1 / snakeSpeed) return

    lastRenderTime = currentTime
    // console.log(secondsSinceLastRender)
    updateLoop()
    render()

    if(gameOver){
        location.reload()
        // if(confirm('You Lose, Press Okay to try again')){
            
        // }
        return
    }
}

function updateLoop(){
    updateSnake()
    updateFood()
    checkDeath()
}

function render(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
// console.dir(checkDeath)
function checkDeath() {
    // console.log(checkDeath)
    gameOver = outsideGrid(snakeBody[0]) || snakeIntersection()
    // gameOver = outsideGrid(snakeHead) || snakeIntersection()
    // console.log(outsideGrid(snakeBody[0]) || snakeIntersection())
    // gameOver = true
}
window.requestAnimationFrame(gameLoop)
