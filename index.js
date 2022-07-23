import Index from './js/Index.js'

Index()

const coba = document.querySelector('button')
const coba2 = document.querySelectorAll('.box-item input')
let a = []
coba.addEventListener('click', () => {
    for (let i = 0; i < coba2.length; i++) {
        a.push(coba2[i].value)
    }

    alert(`
        Data Anda :
        
        ${a[0]}
        ${a[1]}
        ${a[2]}

        Akan kami jual 😂👍
    `)
})