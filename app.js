const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}



function dragStart(event){
// console.log('drag Start', event.target)
event.target.classList.add('hold')
setTimeout(()  => event.target.classList.add('hide'), 0)

}

function dragEnd(event){
    // console.log('drag End')
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
    

}

function dragover (event){
    // console.log('drag Over')
    event.preventDefault()
}
function dragenter (event){
    event.target.classList.add('hovered')
    console.log('drag Enter')
}
function dragleave (event){
    event.target.classList.remove('hovered')
    console.log('drag Leave')
}
function dragdrop (event){
    event.target.classList.remove('hovered')
    event.target.append(item)
    console.log('drag Drop')
}

