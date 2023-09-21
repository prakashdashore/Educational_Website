












const Loco = ()=>{
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}





window.addEventListener("scroll",()=>{
    console.log("scrollling .......")
    document.querySelector("nav").classList.toggle("window_scroll",window.scrollY>0)
})

//  FAQ section

const faqs =  document.querySelectorAll(".faq")

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        
        faq.classList.toggle("open")
         const icon = faq.querySelector(".faq__icon i")
         if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus"
         } else{
            icon.className = "fa-solid fa-plus"
         }


    })
})

// ====================  menu item  =====================
const menu = document.querySelector(".nav__menu")
const openMenuBtn = document.querySelector("#open-menu-btn")
const closeMenuBtn = document.querySelector("#close-menu-btn")

openMenuBtn.addEventListener("click", ()=>{
     menu.style.display = "flex"
     closeMenuBtn.style.display= "inline-block"
     openMenuBtn.style.display= 'none'
})
closeMenuBtn.addEventListener("click",()=>{
    menu.style.display= 'none'
    closeMenuBtn.style.display= "none"
    openMenuBtn.style.display= 'inline-block'
 })







