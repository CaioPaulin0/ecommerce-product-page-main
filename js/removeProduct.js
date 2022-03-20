export default function RemoveProduct(){

const removeProduct = document.getElementById('removeProduct')

removeProduct.addEventListener('click', () => {
    const valueCart = document.querySelector('.number-product-car')
    valueCart.innerHTML = ''
    document.querySelector('.product-cont-divs').style.display = "none"
    document.querySelector('.product-cont-none').style.display = "flex"
})
}