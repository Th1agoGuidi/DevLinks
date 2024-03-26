function toggleMode() {

    const html = document.documentElement

    html.classList.toggle("light");

    //Mudar a imagem no black/light mode
    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute('src', './assets/avatar-light.jpg');
        img.setAttribute('alt', "Foto de Thiago com óculos escuro (O Brilho está muito forte)");
    }
    else {
        img.setAttribute('src', './assets/avatar.jpg');
        img.setAttribute('alt', "Foto de Thiago");
    }
}

function alertPortfolio (){
    alert("Ops! Meu Portfólio ainda está em construção!");
}