export default  function over(){
    showOver()
    closeOver()
    selectImg()
}

function showOver(){
    const showOverDiv = document.querySelector('.picture-product')
    const div = document.querySelector('.prod-over')

    showOverDiv.addEventListener('click', () => {
        div.style.display= "flex";
    })

    return
}

function closeOver(){
    const closeOverDiv = document.getElementById('closeOver')
    const div = document.querySelector('.prod-over')

    closeOverDiv.addEventListener('click', () => {
        div.style.display= "none";
    })

    return
}

function selectImg(){
    const thumbPic = document.querySelector('.thumb-product-over')

    const nThumbPic = thumbPic.querySelectorAll('img')

    const arrayimg= ['https://i.postimg.cc/NGVZbTB3/image-product-1.jpg','https://i.postimg.cc/C1vyNq52/image-product-2.jpg'
    ,'https://i.postimg.cc/zGQW6J2P/image-product-3.jpg','https://i.postimg.cc/sfQ3V3XR/image-product-4.jpg']

    for(let i = 0; i < nThumbPic.length; i++){
        nThumbPic[i].addEventListener('click', () => {

            if(i === 0){
                img(arrayimg[0])
            }

            if(i === 1){
                img(arrayimg[1])
            }
            if(i === 2){
                img(arrayimg[2])
            }
            if(i === 3){
               img(arrayimg[3])  
            }
        })
    }

    function img(img){
        const mainPic = document.getElementById('main-picture-over')
    const imgs = mainPic.querySelector('img')

    imgs.setAttribute('src' , img)

    mainPic.appendChild(imgs)

    return imgs
}
return
}
