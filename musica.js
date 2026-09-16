const fondoInicio = new Audio("破旧世界 (Broken World)(M4A_128K)-mc.m4a");
fondoInicio.loop = true;
fondoInicio.volume = 0.5;
function iniciar() {

    fondoInicio.play()
        .then(() => {
            console.log("Música iniciada");
        })
        .catch(error => {
            console.log("El navegador bloqueó la reproducción automática");
            console.log(error);
        });

}