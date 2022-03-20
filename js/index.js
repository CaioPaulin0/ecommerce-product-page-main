
import OverDiv from './overDiv.js'
import CardItens from './validCard.js'
import RemoveProduct from './removeProduct.js'
import {next,back} from './slide.js'

OverDiv()
RemoveProduct()

const btnMinus = document.getElementById('iconMinus')

const btnPlus = document.getElementById('iconPlus')

const btnaddToCart = document.querySelector('.add-to-cart')

btnPlus.addEventListener('click', addPlus)

btnMinus.addEventListener('click', addMinus)

btnaddToCart.addEventListener('click', addValueCart)

let numberProduct = 1

function addValueCart(){
    
    const valueCart = document.querySelector('.number-product-car')
    
    const value = numberProduct
    
    valueCart.innerHTML = value
    
    CardItens(value)
    console.log(value)
    
    return valueCart
}

function addPlus(){
    addValue(1);
}

function addMinus(){
    addValue(-1);
}

function addValue(value){

    const numberAdd = document.getElementById('numberAdd')

    if ((numberProduct + value) > 0) {
        numberProduct += value;
        numberAdd.innerHTML = numberProduct;
    }

}

const btniconcard = document.getElementById('iconCart')

btniconcard.addEventListener('click',() => {
    const cardCheckout = document.querySelector('.cardCheckout')
    
    cardCheckout.classList.toggle('active')

})

const btnMobile = document.getElementById('btnMobile')
const mobileCont = document.querySelector('.mobileCont')

btnMobile.addEventListener("click",() => {  
    mobileCont.style.display = "block"
})

const btnCloseMobile = document.getElementById('closeMobile')

btnCloseMobile.addEventListener('click', () => {
    mobileCont.style.display = "none"
})

