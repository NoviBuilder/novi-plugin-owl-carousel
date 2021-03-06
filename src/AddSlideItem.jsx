import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-owl-carousel");
const AddSlideItem = {
    trigger: <Icon>{Icons.ICON_PLUS_SQUARE}</Icon>,
    tooltip: messages.editor.addSlide.tooltip,
    closeIcon: "submit",
    title: messages.editor.addSlide.title,
    onTriggerClick: addSlide,
    highlightChild: true
};

export default AddSlideItem;


function addSlide(element, childElement) {
    if (element.owl){
        if (childElement){
            let staticSlide = insertStaticChildElement(element, childElement);
            insertChildElement(element, childElement, staticSlide);
        }
        else {
            let staticSlide = insertStaticElement(element);
            insertElement(element, staticSlide);
        }
    }
    else{
        if (childElement){
            insertStaticChildElement(element, childElement);
            novi.page.forceUpdate();
        }
        else {
            insertStaticElement(element);
            novi.page.forceUpdate();
        }
    }
}

function insertStaticChildElement(element, childElement){
    let staticSlide = novi.element.getStaticReference(childElement);
    if (!staticSlide) return;
    let newStaticSlide = staticSlide.cloneNode(true);
    let staticSlideNextSibling = novi.element.getStaticReference(childElement.parentNode.nextSibling);
    if (staticSlideNextSibling) {
        novi.element.insertStaticBefore(newStaticSlide, staticSlideNextSibling);
    }
    else {
        let staticSlideParent = novi.element.getStaticReference(element);
        novi.element.appendStatic(newStaticSlide, staticSlideParent);
    }
    return newStaticSlide;
}

function insertStaticElement(element){
    let slide = Utils.getLastSlideElement(element);
    if (!slide) return;
    let staticSlide = novi.element.getStaticReference(slide);
    if (!staticSlide) return;
    let newStaticSlide = staticSlide.cloneNode(true);
    let staticSlideParent = novi.element.getStaticReference(element);
    novi.element.appendStatic(newStaticSlide, staticSlideParent);

    return newStaticSlide;
}

function insertChildElement(element, childElement, staticSlide){
    if (!staticSlide) return;
    let newDynamicSlide = novi.element.map(staticSlide);
    let carousel = element.owl;
    let insertIndex = Utils.getElementIndex(element, childElement);
    if (insertIndex){
        carousel.trigger('add.owl.carousel', [newDynamicSlide, insertIndex]);
    }
    else{
        carousel.trigger('add.owl.carousel', [newDynamicSlide]);
    }

    carousel.trigger('refresh.owl.carousel');

    if (insertIndex){
        carousel.trigger('to.owl.carousel', [insertIndex, 200, true]);
    }
    else{
        let insertIndex = element.querySelectorAll(".owl-stage-outer .owl-stage > *").length;
        carousel.trigger('to.owl.carousel', [insertIndex, 200, true]);
    }


}
function insertElement(element, staticSlide){
    if (!staticSlide) return;
    let newDynamicSlide = novi.element.map(staticSlide);
    let carousel = element.owl;
    carousel.trigger('add.owl.carousel', [newDynamicSlide]);
    carousel.trigger('refresh.owl.carousel');
    let insertIndex = element.querySelectorAll(".owl-stage-outer .owl-stage > *").length;
    carousel.trigger('to.owl.carousel', [insertIndex, 200, true]);
}


