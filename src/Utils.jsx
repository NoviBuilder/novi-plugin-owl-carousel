const utils = novi.utils;
export function getLastSlideElement(element){
    let slides = element.querySelectorAll(".owl-stage-outer .owl-stage > *");
    return slides[slides.length -1].firstChild
}

export function getElementIndex(element, childElement){
    let slides = element.querySelectorAll(".owl-stage-outer .owl-stage > *");
    let targetElement = childElement.parentNode;
    for (let i=0; i< slides.length; i++){
        if (slides[i] === targetElement && i !== slides.length -1) return i+1
    }
}
export function getRemoveElementIndex(element, childElement){
    let slides = element.querySelectorAll(".owl-stage-outer .owl-stage > *");
    if (!childElement) return slides.length -1;
    let targetElement = childElement.parentNode;
    for (let i=0; i< slides.length; i++){
        if (slides[i] === targetElement) return i
    }
}
