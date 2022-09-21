import { onSnake, expandSnake } from "./snake.js";
import {randomGridPosition}from "./grid.js"
// Food Element
let food = {x: 14 ,y: 10}
const expansionRate = 1

// drawFood()
export function updateFood(){
    if (onSnake(food)){
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
} 

export function drawFood(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement) 
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}