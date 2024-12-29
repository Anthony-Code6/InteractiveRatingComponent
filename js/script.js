let valor = ''

document.addEventListener('DOMContentLoaded', function (e) {
})

const clickValor = (e) => {
    valor = ''

    if (e.classList.value == 'active') {
        e.classList.remove('active')
        valor = ''
    } else {

        const button = document.querySelectorAll('.card-button button')
        button.forEach(element => {
            element.classList.remove('active')
        });

        e.classList.add('active')
        valor = e.textContent
    }
}

const submit = () => {
    if (valor != '') {
        const home = document.querySelector('.home')
        home.classList.remove('active')

        const message = document.querySelector('.message')
        message.classList.add('active')

        const content = document.getElementById('message-content')
        content.innerHTML = 'You selected '+valor+' out of 5'
    }
}