const filterHead = document.querySelector('.filter__head')
const filterMenu = document.querySelector('.filter-menu')
const filterText = document.querySelector('.filter__head-text')
const filterIcon = document.querySelector('.filter__head-icon')



// console.log(filterMenu.children)
filterHead.addEventListener('click',()=>{
    filterMenu.classList.toggle('filter-menu__active')
})

document.body.addEventListener('click',(e)=>{
    if(e.target != filterHead && e.target!=filterText && e.target!=filterIcon){  
        filterMenu.classList.remove('filter-menu__active')
    }
})


const filterItem = document.querySelectorAll('.filter__item')
let priceGap = 1000;

filterItem.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        const range = item.querySelector(".progress .progress-bar");
        const rangeInput = item.querySelectorAll(".filter__price-range input");
        const priceInput = item.querySelectorAll(".filter__price-number input");
        range.classList.add('progress-bar__active')

        priceInput.forEach((itemNumber)=>{
            itemNumber.addEventListener('input',(e)=>{
                let minPrice = parseInt(priceInput[0].value);
                let maxPrice = parseInt(priceInput[1].value);
                
                if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                    if(e.target.className === "input-min"){
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    }
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            })
        })

        rangeInput.forEach((itemNumber) =>{
            itemNumber.addEventListener("input", e =>{
                let minVal = parseInt(rangeInput[0].value);
                let maxVal = parseInt(rangeInput[1].value);
        
                if((maxVal - minVal) < priceGap){
                    if(e.target.className === "range-min"){
                        rangeInput[0].value = maxVal - priceGap
                    }else{
                        rangeInput[1].value = minVal + priceGap;
                    }
                }
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                });
        });

        item.addEventListener('mouseout',()=>{
            const range = item.querySelector(".progress .progress-bar");
            range.classList.remove('progress-bar__active')
        })
    })
    
})

const catalog = document.querySelectorAll('.catalog')
const productInBascket = document.querySelector('.basket-count')


catalog.forEach((item)=>{
    const addBasket = item.querySelector('.catalog__price-basket__add')
    const removeBasket = item.querySelector('.catalog__price-basket__del')
    const quanlityProduct = item.querySelector('.catalog__price-basket span')
    const inBasket =item.querySelector('.catalog__price-basket__in')

    let quanlity = Number(quanlityProduct.innerText)

    addBasket.addEventListener('click',()=>{
        quanlity+=1
        quanlityProduct.innerText=quanlity
    })
    
    removeBasket.addEventListener('click',()=>{
        if (quanlity==1){
            return
        }
        quanlity-=1
        quanlityProduct.innerText=quanlity
    })

    inBasket.addEventListener('click',()=>{
        productInBascket.innerText = quanlityProduct.innerText
    })

})
