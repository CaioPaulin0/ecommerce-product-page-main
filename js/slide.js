const next = document.getElementById('next')
const back = document.getElementById('back')

function showSlides(n){

    const arrayimg= ['https://i.postimg.cc/NGVZbTB3/image-product-1.jpg','https://i.postimg.cc/C1vyNq52/image-product-2.jpg'
    ,'https://i.postimg.cc/zGQW6J2P/image-product-3.jpg','https://i.postimg.cc/sfQ3V3XR/image-product-4.jpg']

    array(arrayimg[n])

    return
}

function array(img){
    const imgMobile = document.querySelector('.imgMobile')

    imgMobile.setAttribute('src', img)

    return imgMobile
}

let slideIndex = 1

next.addEventListener('click',() =>{

    if(slideIndex >= 3){
        showSlides(3)
    } else{
        showSlides(slideIndex++)
    }

})

back.addEventListener('click',() =>{

    if(slideIndex <= 0){
        showSlides(0)
    } else{
        showSlides(slideIndex--)
    }

})

export {next,back}