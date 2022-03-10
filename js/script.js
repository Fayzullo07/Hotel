let tag = document.getElementsByTagName('h1')[0]

function hover(){
    tag.textContent = 'Assalomu alaykum!'
}

tag.addEventListener('mouseenter', hover)

tag.addEventListener('mouseleave', function () {
    tag.textContent = 'HBT'
})