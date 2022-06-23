const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

const lightTheme = {
    '--background-C': '#d6d6d6'
}
const darkTheme = {
    '--background-C': '#2b2b2b'
}

inputContainer.addEventListener('change', () => {
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}