const productForm = document.getElementById('product-form')

productForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let product = document.getElementById('product').value 
    let brand = document.getElementById('brand').value
    let model = document.getElementById('model').value
    let spec = document.getElementById('spec').value
    let code = document.getElementById('code').value
    let price = document.getElementById('price').value

    let productData = {
        product,
        brand,
        model,
        spec,
        code,
        price
    }

    let dataToJSON = JSON.stringify(productData)

    localStorage.setItem('productDatabase' ,dataToJSON)

    alert('Produto cadastrado com sucesso!')

    document.getElementById('product-form').reset()
})