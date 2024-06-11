const input = document.getElementById('input')
const output = document.getElementById('output')

function capital() {
    if (input.value == '') {
        output.innerText = ' '
        let paragraph = document.createElement('p')
        paragraph.innerHTML = "please enter the prompt"
        paragraph.style.color = "red"
        paragraph.style.fontWeight = "bolder"
        output.appendChild(paragraph)
    }
    else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = input.value
        paragraph.classList.add('capital')
        output.appendChild(paragraph)
    }
}

function lower() {
    if (input.value == '') {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = "please enter the prompt"
        paragraph.style.color = "red"
        paragraph.style.fontWeight = "bolder"
        output.appendChild(paragraph)
    } else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = input.value
        paragraph.classList.add('lower')
        output.appendChild(paragraph)
    }
}
function lc() {
    if (input.value == '') {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = "please enter the prompt"
        paragraph.style.color = "red"
        paragraph.style.fontWeight = "bolder"
        output.appendChild(paragraph)
    }
    else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = input.value
        paragraph.classList.add('lc')
        output.appendChild(paragraph)
    }
}
function bold() {
    if (input.value == '') {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = "please enter the prompt"
        paragraph.style.color = "red"
        paragraph.style.fontWeight = "bolder"
        output.appendChild(paragraph)
    } else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = input.value
        paragraph.classList.add('bold')
        output.appendChild(paragraph)
    }
}
function under() {
    if (input.value == '') {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = "please enter the prompt"
        paragraph.style.color = "red"
        paragraph.style.fontWeight = "bolder"
        output.appendChild(paragraph)
    } else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = input.value
        paragraph.classList.add('under')
        output.appendChild(paragraph)
    }
}
function strike() {
    if (input.value == '') {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = "please enter the prompt"
        paragraph.style.color = "red"
        paragraph.style.fontWeight = "bolder"
        output.appendChild(paragraph)
    } else {
        output.innerText = ''
        let paragraph = document.createElement('p')
        paragraph.innerHTML = input.value
        paragraph.classList.add('strike')
        output.appendChild(paragraph)
    }
}
