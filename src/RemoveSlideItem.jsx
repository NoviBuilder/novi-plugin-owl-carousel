import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-owl-carousel");
const RemoveSlideItem = {
    trigger: <Icon>{Icons.ICON_MINUS_SQUARE}</Icon>,
    tooltip: messages.editor.removeSlide.tooltip,
    closeIcon: "submit",
    title: messages.editor.removeSlide.title,
    onTriggerClick: removeSlide,
    highlightChild: true
};

export default RemoveSlideItem;


function removeSlide(element, childElement) {
    if (element.owl){
        if (childElement){
            let staticSlide = removeStaticChildElement(childElement);
            removeElement(element, staticSlide, childElement);
            novi.element.removeStatic(staticSlide);
        }
        else {
            let staticSlide = removeStaticElement(element);
            removeElement(element, staticSlide);
            novi.element.removeStatic(staticSlide);
        }
    }
    else{
        if (childElement){
            let staticSlide = removeStaticChildElement(childElement);
            novi.element.removeStatic(staticSlide);
            novi.page.forceUpdate();
        }
        else {
            let staticSlide = removeStaticElement(element);
            novi.element.removeStatic(staticSlide);
            novi.page.forceUpdate();
        }
    }
}

function removeStaticChildElement(childElement){
    let staticSlide = novi.element.getStaticReference(childElement);
    if (!staticSlide) return;
    return staticSlide;
}

function removeStaticElement(element){
    let lastElement = Utils.getLastSlideElement(element);
    let staticSlide = novi.element.getStaticReference(lastElement);
    if (!staticSlide) return;
    return staticSlide;
}

function removeElement(element, staticSlide, childElement){
    if (!staticSlide) return;
    let carousel = element.owl;
    let removeIndex = Utils.getRemoveElementIndex(element, childElement);
    carousel.trigger('remove.owl.carousel', removeIndex);
    carousel.trigger('refresh.owl.carousel');
}

