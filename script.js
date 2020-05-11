let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");          //Renderiza o canvas
let box = 32;                                   //tamanho do quadradinho

function criarBR(){                          //Função do BackGround
    context.fillStyle = "Lightgrenn";       //Cor de fundo 
    context.fillRect(0, 0, 16 * box, 16 * box);     //Desenha o retangulo
}

criarBG();