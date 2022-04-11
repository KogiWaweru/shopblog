
const productContainers = document.getElementByClassName("product-container");
const nextbtn = document.getElementByClassName("nxt-btn");
const prevbtn = document.getElementByClassName("prev-btn");

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextbtn[i].addEventListener('click',() =>{
        item.scrollLeft += containerWidth;
    });

    prevbtn[i].addEventListener('click',() =>{
        item.scrollLeft -= containerWidth;
    });
});