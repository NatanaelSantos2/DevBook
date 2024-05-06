const postagens = [
    {
        caminhoImg: 'assets/meu perfil.png',
        nome: 'Valdir',
        texto: 'Olha que código massa que eu estou criando',
        codigo: 'export const examChallengeId = 647e22d18acb466c97ccbef8 export const examJson id: examChallengeId,title: Exam Certification, numberOfQuestionsInExam:3'
    },

    {
        caminhoImg: 'assets/casa.png',
        nome: 'Pedro',
        texto: 'Olha que código massa que eu estou criando',
        codigo: 'export const examChallengeId = 647e22d18acb466c97ccbef8 export const examJson id: examChallengeId,title: Exam Certification, numberOfQuestionsInExam:3'
    },

    {
        caminhoImg:'assets/logo.png',
        nome: 'Luiz',
        texto: 'Olha que código massa que eu estou criando',
        codigo: 'export const examChallengeId = 647e22d18acb466c97ccbef8 export const examJson id: examChallengeId,title: Exam Certification, numberOfQuestionsInExam:3'
    },

    {
        caminhoImg: 'assets/meu perfil.png',
        nome: 'Natanael',
        texto: 'Olha que código massa que eu estou criando',
        codigo: 'export const examChallengeId = 647e22d18acb466c97ccbef8 export const examJson id: examChallengeId,title: Exam Certification, numberOfQuestionsInExam:3'
    }
]

const postar = document.getElementById('lugar-das-postagens');

postagens.forEach((objeto) => {

    const div = document.createElement('div');
    div.style.position = 'relative'
    div.style.backgroundColor = '#2E4053'
    div.style.padding = '25px'
    div.style.margin = '15px'
    div.style.borderRadius = '10px'

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const p2 = document.createElement('p')

    const img = document.createElement('img')
    img.src = objeto.caminhoImg;
    img.style.display = 'inline-block'
    img.style.position = 'absolute'
    img.style.left = '30px'
    img.style.top = '50px'
    img.style.borderRadius = '50px'

    h1.textContent = objeto.nome;
    h1.style.marginLeft = '150px'
    p.textContent = `${objeto.texto}`

    p2.textContent = `${objeto.codigo}`
    p2.style.fontStyle = 'italic'

    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(p2)
    postar.appendChild(div);
})