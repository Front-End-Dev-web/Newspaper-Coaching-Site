let S_btn =document.querySelectorAll('.search-btn')
S_btn.forEach(elem=>{    
    elem.addEventListener('click',()=>{
        document.querySelector('.form').classList.toggle('active_search_btn')
    })
})

let dropdwn =document.getElementById('dropdwn')
dropdwn.addEventListener('click',(e)=>{
    // #dropdown-menu   
    let dropdwn_m =document.querySelector('#dropdown-menu')
    console.log(dropdwn_m)

        dropdwn_m.classList.toggle('active_drop')

})