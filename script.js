window.addEventListener("load", function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var sound = new Audio();
    var posX = 100;
    var stapX = 5;
    var posY = 100;
    var stapY = 5;
    var btn = document.getElementById('btn');
    var state = true;

    btn.addEventListener("click", function() {
        state = !state;
    })

    sound.src = "23338__altemark__pong.wav";

    function draw() {
        context.clearRect(0, 0, 800, 450)
        context.fillStyle = "white";
        context.fillRect(posX, posY, 50, 50);
        posX += stapX;
        posY += stapY;

        if (posX > 750) {
            stapX = -stapX;
            if (state) {
                sound.play()
            };
        }
        if (posX < 0) {
            stapX = -stapX;
            if (state) {
                sound.play()
            };
        }

        if (posY < 0 || posY > 400) {
            stapY = -stapY;
            if (state) {
                sound.play()
            };
        }
    }

    setInterval(draw, 10)
})