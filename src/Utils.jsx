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
export function getPrevElement(element, childElement){
    let index = getRemoveElementIndex(element, childElement);
    if (index === undefined) return;
    let slides = element.querySelectorAll(".owl-stage-outer .owl-stage > *");
    return slides[index-1].firstChild
}

export function getNextElement(element, childElement){
    let index = getRemoveElementIndex(element, childElement);
    if (index === undefined) return false;
    let slides = element.querySelectorAll(".owl-stage-outer .owl-stage > *");
    return slides[index+2].firstChild
}

export function isLastPrevSlide(element, childElement){
    let index = getRemoveElementIndex(element, childElement);
    if (index === undefined) return false;
    let slides = element.querySelectorAll(".owl-stage-outer .owl-stage > *");
    return index + 1 === slides.length -1
}
