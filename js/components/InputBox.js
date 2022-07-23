import Container from '../elements/Container.js'
import BoxPosition from '../elements/BoxPosition.js'
import Box from '../elements/box.js'
import BoxInner from '../elements/BoxInner.js'
import Button from '../elements/Button.js'
import BoxItem from '../elements/BoxItem.js'
import Input from '../elements/Input.js'
import Span from '../elements/Span.js'

const appendElements = (arg) => {
    const appendBoxPosition = () => {
        const append = arg.append(BoxPosition())
        const boxPosition = document.querySelector('.box-position')
        appendBox(boxPosition)

        function appendBox(arg) {
            const append = arg.append(Box())
            const box = document.querySelector('.box')
            appendBoxInner(box)
            return append
        }

        function appendBoxInner(arg) {
            const append = arg.append(BoxInner())
            const boxInner = document.querySelector('.box-inner')
            appendBoxItem(boxInner)
            return append
        }

        function appendBoxItem(arg) {
            let append
            for (let i = 0; i < 3; i++) {
                append += arg.append(BoxItem())
            }
            const boxItem = document.querySelectorAll('.box-item')
            appendInput(boxItem)
            arg.append(Button())
            return append
        }

        function appendInput(arg) {
            let append
            const placeholder = ['Masukkan nama', 'Masukkan tanggal lahir', 'Masukkan alamat']
            for (let i = 0; i < placeholder.length; i++) {
                append += arg[i].append(Input(placeholder[i]), Span())
            }
            return append
        }

        return append
    }

    return appendBoxPosition()
}

const InputBox = () => {
    const appendContainer = document.querySelector('#root').append(Container())
    const container = document.querySelector('.container')
    appendElements(container)

    return appendContainer
}

export default InputBox