export default function createAppendChild(type,parentEl,textContent,id,...classes){
    
    let newEl = parentEl.appendChild(document.createElement(type));

    if(textContent==undefined){
    } else newEl.textContent = textContent;
    
    if(id==undefined){
    } else newEl.setAttribute('id',id);

    if(classes==undefined){
    } else {
        for(let i=0;i<classes.length;i++){
            newEl.classList.add(classes[i]);
        }
    }

    return newEl
}
