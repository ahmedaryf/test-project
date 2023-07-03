const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
        nav.style.backgroundColor = 'rgba(255, 255, 255, .8)';
        nav.style.transition ='backGround 1s, color 2s'
    } else{
        nav.style.backgroundColor = 'transparent';
    }
})

