const clientForm = document.getElementById('client-form')

clientForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let fullName = document.getElementById('fullName').value
    let address = document.getElementById('address').value
    let whatsapp = document.getElementById('whatsapp').value
    let email = document.getElementById('email').value

    let clientData = {
        fullName,
        address,
        whatsapp,
        email
    }

    let dataToJSON = JSON.stringify(clientData)

    localStorage.setItem('clientDatabase', dataToJSON)

    alert('Cliente cadastrado com sucesso!')

    document.getElementById('client-form').reset()
})
