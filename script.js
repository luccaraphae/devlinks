// Função para Dark mode

function toggleClick(){
    const html = document.documentElement

    html.classList.toggle("light")

    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar_light.png')
        img.setAttribute('alt', 'Desenho de notebook branco com telas em terceira dimensão saindo de sua tela em um fundo preto')
    }else{
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Personagem Kakashi, de desenho japonês, usando uma máscara')
    }
}
