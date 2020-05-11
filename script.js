let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");          //Renderiza o canvas
let box = 32;               //tamanho do pixel dentro do canvas
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}                    //tamanho do quadradinho

let direction = "right";

let food = {                                       //colocando a commida em local aleatório
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box

}

function criarBG(){                          //Função do BackGround
    context.fillStyle = "red";       //Cor de fundo 
    context.fillRect(0, 0, 16 * box, 16 * box);     //Desenha o retangulo
}

function criarCobrinha(){
    for(i=0; i < snake.length; length++){
        context.fillStyle = "yellow";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "pinky";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);


function update(event){                                                    //direção da cobrinha
    if(event.keycode == 37 && direction !="right") direction = "left";
    if(event.keycode == 38 && direction !="down") direction = "up";
    if(event.keycode == 39 && direction !="left") direction = "right";
    if(event.keycode == 40 && direction !="up") direction = "down";
}


function iniciarJogo(){

   
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;   //limite da area de movimento da cobrinha
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].y * box;

    for(i = 1; i <snake.length; i++){
        if(snake[0].x == snake[i]. && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
 
    let snakeX = snake[0].x;         //posição inicial
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakey -= box;

  if(snakeX != food.x || snakeY != food.y){
      snake.pop();
  }else{
      food.x = Math.floor(Math.random() * 15 + 1) * box;
      food.y = Math.floor(Math.random() * 15 + 1) * box;
  }
   
    let newHead = {

        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

    

}
let jogo = setInterval(iniciarJogo, 100);

iniciarJogo();