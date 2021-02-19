


let btn1 = document.querySelector('button')
let nameSelector = document.querySelector('#name')
let massege = document.querySelector('#message')
let color = document.querySelector('#color')
let chat = document.querySelector('#chat')

btn1.addEventListener("mousedown", function(){
    let div = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    div.append(span1)
    div.append(span2)
    chat.append(div)
    span1.innerText = nameSelector.value + ": "
    span2.innerText = massege.value
    span1.style.color = color.value


    fetch("https://it-academy-ajax-table-21e1b-default-rtdb.firebaseio.com/chat.json",{
        method: "POST",
        body: JSON.stringify({
            name: nameSelector.value,
            massage:  massege.value,
            color: color.value
        })

    })

    
})



