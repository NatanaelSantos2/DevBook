const notificacoes = [

    {
        caminhoImg: 'assets/meu perfil.png',
        nome: 'Valdir',
        texto: 'curtiu sua publicação',
        publicacao: 'olha que código massa'

    },

    {
        caminhoImg: 'assets/logo.png',
        nome: 'Pedro',
        texto: 'curtiu sua publicação',
        publicacao: 'olha que código massa'

    },

    {
        caminhoImg: 'assets/meu perfil.png',
        nome: 'Natanael',
        texto: 'curtiu sua publicação',
        publicacao: 'olha que código massa'

    },

    {
        caminhoImg: 'assets/sino.png',
        nome: 'João',
        texto: 'curtiu sua publicação',
        publicacao: 'olha que código massa'

    },
]

const container = document.getElementById('container-notificacoes');

notificacoes.forEach((obj) => {

    const div = document.createElement('div')
    div.style.position = 'relative'
    div.style.width = '100%'
    div.style.backgroundColor = '#2E4053'
    div.style.display ='inline-block'
    div.style.margin = '10px'
    div.style.padding = '25px'
    div.style.color = 'white'
    div.style.fontSize = '30px'

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const p2 = document.createElement('p')

    const img = document.createElement('img')
    img.src = obj.caminhoImg;
    img.style.borderRadius = '50px'


    h1.textContent = `${obj.nome}`
    //h1.style.display = 'inline-block'
    h1.style.fontWeight = 'bold'
    p.textContent = `${obj.texto}`
    p2.textContent = `${obj.publicacao}`

    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(p2)
    container.appendChild(div)
})