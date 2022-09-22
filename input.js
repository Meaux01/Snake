let direction = {x:0, y:0}
let lastDirection= {x:0, y:0}

window.addEventListener('keydown',movement =>{
        switch (movement.key) {
            case 'ArrowDown':
                if(lastDirection.y !== 0) break
                direction = {x: 0, y: 1}
                break;
            case 'ArrowUp':
                if(lastDirection.y !== 0) break
                direction = {x: 0, y: -1}
                break;
            case 'ArrowRight':
                if(lastDirection.x !== 0) break
               direction = {x:1, y:0}
                break;
            case 'ArrowLeft':
                if(lastDirection.x !== 0) break
                direction = {x:-1, y: 0}
                break;
            // case 's':
            //     if(lastDirection.y !== 0) break
            //     direction = {x: 0, y: 1}
            //     break;
            // case 'w':
            //     if(lastDirection.y !== 0) break
            //     direction = {x: 0,y: -1}
            //     break;
            // case 'd':
            //     if(lastDirection.x !== 0) break
            //    direction = {x:1, y:0}
            //     break;
            // case 'a':
            //     if(lastDirection.x !== 0) break
            //     direction = {x:-1, y: 0}
            //     break;
        }
    }   
)

export function inputDirection(){
    lastDirection = direction
    return direction
}
