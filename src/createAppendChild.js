export default function createAppendChild(type,parentEl,textContent,id,...classes){
    
    let newEl = parentEl.appendChild(document.createElement(type));

    textContent== undefined ? null : newEl.textContent = textContent;
    id == undefined ? null : newEl.setAttribute('id',id);
    classes == undefined ? null : classes.forEach(newClass => newEl.classList.add(newClass));

    return newEl
};