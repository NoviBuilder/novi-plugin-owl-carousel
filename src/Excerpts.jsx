import * as Utils from "./Utils";

export function canMoveLeft(element, childElement){
    if (!childElement) return false;
    let itemIndex = Utils.getRemoveElementIndex(element, childElement);
    return itemIndex > 0;
}
export function canMoveRight(element, childElement){
    if (!childElement) return false;
    let itemIndex = Utils.getRemoveElementIndex(element, childElement);
    let lastIndex = Utils.getRemoveElementIndex(element);
    return lastIndex !== itemIndex;
}
