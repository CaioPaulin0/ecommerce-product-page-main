
export default function CardItens(value){
    const productCont = document.querySelector('.product-cont')
    const productDivs = document.querySelector('.product-cont-divs')
    const productNoDivs = document.querySelector('.product-cont-none')

    const n = document.getElementById('nPro')

    const v = document.getElementById('result')

    n.innerHTML = value
    v.innerHTML = '$' + value * 125
    
    if(value >= 1){
        productDivs.style.display = "flex"
        productNoDivs.style.display = "none"
    } else{
        productDivs.style.display = "none"
        productNoDivs.style.display = "flex"
    }
}



