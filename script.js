let message = "Hi, I'm Ali Farhoud"

let textPosition = 0
var speed = 150

const typeWriter = () => {
	document.getElementById('greeting').innerHTML =
		message.substring(0, textPosition) + "<span id='typer'>\u25ae</span>"
	if (textPosition++ != message.length) {
		setTimeout(typeWriter, speed)
	}
}
window.addEventListener('DOMContentLoaded', typeWriter)
const modal = document.querySelector('.modal')
const contact = document.getElementById('contact-me')
const closeModalBtn = document.getElementById('close-modal')
const openModal = () => {
	modal.style.display = 'block'
}
const closeModal = () => {
	modal.style.display = 'none'
}
contact.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

let themeDots = document.getElementsByClassName('theme-dot')
for (let i = 0; i < themeDots.length; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		setTheme(mode)
	})
	themeDots[i].addEventListener('click', () => {
		if (
			document.getElementById('greeting').textContent?.length > message.length
		) {
			document.getElementById('greeting').innerHTML = ''
			textPosition = 0
			setTimeout(typeWriter, speed)
		}
	})
}
const setTheme = (mode) => {
	switch (mode) {
		case 'light':
			document.getElementById('theme-style').href = './styles/styles.css'
			break
		case 'blue':
			document.getElementById('theme-style').href = './styles/blue.css'
			break
		case 'green':
			document.getElementById('theme-style').href = './styles/green.css'
			break
		case 'purple':
			document.getElementById('theme-style').href = './styles/purple.css'
			break
		default:
			break
	}

	localStorage.setItem('theme', mode)
}
let theme = localStorage.getItem('theme')
if (!theme) {
	setTheme('light')
} else {
	setTheme(theme)
}
