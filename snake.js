import { inputDirection } from "./input.js"

export const snakeSpeed = 5
let newSegments = 0
export const snakeBody = [{x: 9, y: 10}]

export function updateSnake(){
    addSegments()
    const direction = inputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += direction.x
    snakeBody[0].y += direction.y

} 
export function drawSnake(gameBoard){
     snakeBody.forEach(segment =>{
          const snakeElement = document.createElement('div')
          snakeElement.style.gridRowStart = segment.y
          snakeElement.style.gridColumnStart = segment.x
          snakeElement.classList.add('snake')
          gameBoard.appendChild(snakeElement)
     })  
}

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    return (snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) {
            return false
        }
        return equalPositions(segment, position)
    }))
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0
}

export function snakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}