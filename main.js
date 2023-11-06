import './style.css'

const themeBtn = document.querySelector('.theme')

const getCurrentTheme = () => {
	let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
	localStorage.getItem('canabrey.theme')
		? (theme = localStorage.getItem('canabrey.theme'))
		: null
	return theme
}

getCurrentTheme()

const loadTheme = (theme) => {
	const root = document.querySelector(':root')
	switch (theme) {
		case 'dark':
			themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="bkg2--stroke" width="20" height="20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
`
			break
		default:
			themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="bkg2--stroke" width="20" height="20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
`
	}
	root.setAttribute('color-scheme', theme)
}

themeBtn.addEventListener('click', () => {
	let theme = getCurrentTheme()
	let audio

	if (theme === 'dark') {
		audio = document.querySelector('.theme-audio--light-on')
		theme = 'light'
	} else {
		audio = document.querySelector('.theme-audio--light-off')
		theme = 'dark'
	}
	audio.currentTime = 0
	audio.play()
	localStorage.setItem('canabrey.theme', theme)
	loadTheme(theme)
})

window.addEventListener('DOMContentLoaded', () => {
	loadTheme(getCurrentTheme())
})
