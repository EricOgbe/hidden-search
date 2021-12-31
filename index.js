const icon = document.querySelector('.input-icons i')
const inputField = document.querySelector('input')
let inputActive = false;

icon.addEventListener('click',() => {
    inputActive = !inputActive
    
    if (!inputActive){
        icon.style.left = '0%'
        inputField.placeholder = ''
        inputField.style.width = '15px'
    }else{
        icon.classList.add('active')
        icon.style.left = '90%'
        inputField.placeholder = 'search...'
        inputField.style.width = '200px'
    }
})





console.log(counter)