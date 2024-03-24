function toggleMode() {
    //Selecionei minha tag <html> dentro do meu documento
    const html = document.documentElement

    // //Vou verificar se no meu documento, talg <html> contém a class= "light"
    // if(html.classList.contains("light")) {
    //     //Se Houver os requisitos acima, irei remover a class="light"
    //     html.classList.remove("light")
    // }   else {
    //     //Se não houver a class="light", irá adicionar essa classe
    //     html.classList.add("light")
    // }

    //Metodo mais simples:

    //Se tiver a class="light" no <html> ele tira, se não tiver ele coloca.
    html.classList.toggle("light");


    //Mudar a imagem no black/light mode

    //Irei selecionar a div de id="profile" e dentro dela a tag img
    const img = document.querySelector("#profile img");

    //Irei verificar se a <html> tem a class="light"
    if (html.classList.contains("light")) {

        //Se a verificação funcionar irá até profile -> img -> selecionar 'src' e alterar o valor
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', "Foto de Thiago com óculos escuro (O Brilho está muito forte)");
        
    }   else {
        
        //Se não houver a class="light" no doc <html> irá manter/alterar para outra imagem
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', "Foto de Thiago");
    }

}

