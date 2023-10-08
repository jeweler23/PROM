const catalog = document.querySelector('.catalog')

catalog.addEventListener('mouseover',()=>{
    console.log('catalog')
})

const filterHead = document.querySelector('.filter__head')
const filterMenu = document.querySelector('.filter-menu')
const filterText = document.querySelector('.filter__head-text')
const filterIcon = document.querySelector('.filter__head-icon')

filterHead.addEventListener('click',()=>{
    filterMenu.classList.toggle('filter-menu__active')
    console.log(filterMenu)
})

document.addEventListener('click',(e)=>{
    if(e.target !== filterHead && e.target !== filterText && e.target !== filterIcon && e.target!==filterMenu.parentElement.children){ 
        filterMenu.classList.remove('filter-menu__active')
    }
})

