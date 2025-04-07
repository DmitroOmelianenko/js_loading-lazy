const imagesElements = document.querySelectorAll(".iage");


const obServer = new IntersectionObserver((callback) => {
    
})

imagesElements.forEach((el) => {
    obServer.observe(el)
})