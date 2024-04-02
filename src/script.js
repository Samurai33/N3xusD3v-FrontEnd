function growDiv() {
    var grow = document.getElementById('grow')
    var btnMais = document.getElementById('botao-mais')
    var btnMin = document.getElementById('botao-min')

    if (grow.clientWidth) {
        grow.style.width = 0
        btnMin.style.display = 'none'
        setTimeout(() => {
            grow.style.display = 'none'
            btnMais.style.display = 'block'
        }, 400)
    } else {
        btnMais.style.display = 'none'
        grow.style.display = 'block'
        btnMin.style.display = 'block'
        setTimeout(() => grow.style.width = '100%', 10)
    }
}