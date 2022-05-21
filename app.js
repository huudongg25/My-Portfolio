const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// ====== slide favourite ====

const featureImg = $('.feature_img')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const favImages = $$('.fav_images-item')
let currentIndex = 0

function renderImg(index) {
    favImages.forEach(item => {
        item.classList.remove('active')
    });
    currentIndex = index
    featureImg.src = favImages[currentIndex].src
    favImages[currentIndex].classList.add('active')
}

document.addEventListener('keydown',function(e){
    if(e.keyCode == "37" && currentIndex > 0 ) {
        currentIndex--
        renderImg(currentIndex)
    } else if (e.keyCode == "37" && currentIndex == 0) {
        currentIndex = favImages.length - 1
        renderImg(currentIndex)
    }
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == "39" && currentIndex < favImages.length - 1 ) {
        currentIndex++
        renderImg(currentIndex)
    } else if (e.keyCode == "39" && currentIndex == favImages.length - 1) {
        currentIndex = 0
        renderImg(currentIndex)
    }
})

nextBtn.addEventListener('click',function(){
  if (currentIndex == favImages.length - 1) {
      currentIndex = 0
  } else {
      currentIndex++
  }
  renderImg(currentIndex)
})

prevBtn.addEventListener('click',function(){
    if (currentIndex == 0) {
        currentIndex = favImages.length -1
    } else {
        currentIndex--
    }
    renderImg(currentIndex)
})

favImages.forEach((item,index) => {
    item.addEventListener('click',function(){
        renderImg(index)
    })
})

setInterval(function(){
    if (currentIndex == favImages.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    renderImg(currentIndex)
},10000)
renderImg(0)
