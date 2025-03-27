const header = document.getElementById('header')
const h1 = document.createElement('h1')
const h2 = document.createElement('h2')
const span = document.createElement('span')
const sendButton = document.getElementById('send-btn')

//Bronze
h1.textContent= 'JavaScript Made This!!' 
h2.innerHTML = `<span class="name">Anthony Shook</span> wrote the JavaScript`
header.appendChild(h1)
header.appendChild(h2)
h2.appendChild(span)

//Silver
const div=document.querySelector('.messages')
const messages= document.querySelectorAll('.message')
const positiveMessages=[
    'Everything is awesome!', 'You are doing great!', 'Do not give up','You can do it!'
]
div.addEventListener('mousemove',()=> {
    for(let i=0;i<messages.length;i++){
        messages[i].textContent=positiveMessages[i]
    }
})

const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () =>{
    div.textContent=''
}

)

//Gold
const themedropdownButton = document.getElementById('theme-drop-down')
themedropdownButton.addEventListener('change',() =>{
    const selectedTheme=themedropdownButton.value;
    messages.forEach(message =>{
        message.classList.remove('theme-one', themedropdownButton.value==='theme-one')
        message.classList.remove('theme-two', themedropdownButton.value==='theme-two')
        message.classList.add(selectedTheme);
    }
    )
})
