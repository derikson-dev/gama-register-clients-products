const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', event => {
    event.preventDefault //temp

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let loginData = {
        email,
        password
    }

    let dataToJSON = JSON.stringify(loginData)

    localStorage.setItem('loginDatabase',dataToJSON)
})