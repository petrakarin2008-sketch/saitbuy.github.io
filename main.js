let elem = document.querySelectorAll('.active')


elem.forEach((item) => {
    item.addEventListener('click',()=>{
        item.classList.toggle('active')

        if(!item.classList.contains('active')){
            item.querySelector('.act').classList.add('noactive')
        }else{
            item.querySelector('.act').classList.remove('noactive')
        }
    })
})

