

const body = document.body

const accBtn = document.querySelector('#submit-button')
const formCont = document.querySelector('#form-self')
const loginImage = document.querySelector('#login-image')

 accBtn.addEventListener('click', () => {formCont.requestSubmit()})


