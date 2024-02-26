function loader(){
    
var tl = gsap.timeline();

tl.to(".yellow",{
    top: "-100%",
    delay:0.3,
    duration:0.5,
    expo:"ease.out"
})



tl.from(".intro .yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    expo:"ease.out"
},"anime")

tl.to(".intro h1",{
    color:"black",
    delay:0.5,
},"anime")

tl.to(".intro",{
    opacity: 0,
})

tl.to(".intro",{
    display:"none"
})
}

loader();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let elem = document.querySelectorAll('.page2 .elem')
let page2 = document.querySelector('.page2')

function hover(){
    elem.forEach((e)=>{
        e.addEventListener('mouseenter',function(){
            let element = e.getAttribute('data-img')
            page2.style.backgroundImage = `url('${element}')`;
        })
    })

    elem.forEach((e)=>{
        e.addEventListener('mouseleave',function(){
            page2.style.backgroundImage = '';
        })
    })
}

hover();


document.querySelector(".page3 .back_to_top_btn").addEventListener("click", function(){
    scroll.scrollTo(0)
})

document.querySelector(".page1 .footer span").addEventListener("click", function(){
    scroll.scrollTo(".page2")
})