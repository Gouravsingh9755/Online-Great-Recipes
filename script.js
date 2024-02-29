

function MenuOffandONfn(){
    let menuPage = document.querySelector(".menupage")
    let menuOpen = document.querySelector(".menu-open")
    let menuClose = document.querySelector(".menu-close")

    
   menuOpen.addEventListener("click",()=>{
    menuOn()
   })

   menuClose.addEventListener("click",()=>{
    menuOff()
   })

function menuOn (eve){

    menuPage.style.display = "initial"

}

function menuOff (eve){

    menuPage.style.display = "none"

}

}

MenuOffandONfn()



var w = window.innerWidth;
var h = window.innerHeight;

console.log(` width ${w}, height ${h}`);



// let hellobtn = document.querySelector(".hello_btn")

// console.log(hellobtn);

// hellobtn.addEventListener("mouseenter", function(){

// hellobtn.classList.add("hover")
// setTimeout(()=>{
//     hellobtn.classList.remove("hover")
// },2000)
// })

// hellobtn.addEventListener("mouseleave", function(){
// hellobtn.classList.remove("hover")
// })






    





