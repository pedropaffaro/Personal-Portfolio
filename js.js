function scrolled(){
    document.querySelectorAll('img').forEach((img, index) =>{
        if(img.getBoundingClientRect().top < window.innerHeight){
            img.src = img.getAttribute('data-src'); 
        };
    })
}
window.addEventListener('scroll', scrolled());

function contactMe(){
    let navImg = document.querySelector("img.nav-img");
    
    navImg.setAttribute('src', 'img/undraw_contact_us_15o2.svg');
}