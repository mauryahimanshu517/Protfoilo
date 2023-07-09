function valuesetter(){
    gsap.set("#nav",{y:"-100%",opacity:0})
    gsap.set("#home span .child",{y:"100%"})
    gsap.set("#home .row img",{opacity:0})

    document.querySelectorAll("#Visual>g").forEach(function(e) {
        var character = e.childNodes[0].childNodes[0];
        character.style.strokeDasharray = character.getTotalLength() + 'px'; 
        character.style.strokeOffset = character.getTotalLength() + 'px'; 
    });
}
function revealtospan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create two spans
    let parent=document.createElement("span")
    let child=document.createElement("span")

    //parent and child both sets theire respective classes
    parent.classList.add("parent");
    child.classList.add("child")
    //span prants gets child and child gets elem details

    child.innerHTML=elem.innerHTML;
    parent.appendChild(child)
    //elem replaceses its value with praent spn
    elem.innerHTML="";
    elem.appendChild(parent);
    
})
}

function loaderAnimation(){
    
var tl=gsap.timeline();
tl.from("#loader .child span",{
    x:100,
    delay:1,
    duration:1.4,
    stagger:.2,
    ease:Power3.easeInOut
})
.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    delay:.8,
    ease:Circ.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    ease:Circ.easeInOut
,})
.to("#green",{
    height:"100%",
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut
,})
.to("#green",{
    height:0,
    duration:1,
    delay:-.3,
    ease:Circ.easeInOut,
    onComplete:function(){
        animatehomepage()
    }
,})

}
function animatesvg() {
    

    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline", {
        strokeDasharray: "0",
        duration: 2,
        ease: Expo.easeInOut,
        delay:2
       
    });
}

function animatehomepage(){
   
    var tl=gsap.timeline();

    tl.to("#nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut
        
    })
    tl.to("#home .parent .child",{
        y:0,
        duration:1,
        stagger:.1,
        ease:Expo.easeInOut,
        onComplete:function(){
            animatesvg()
        }
        
    })
    
}

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}


revealtospan();
valuesetter();
loaderAnimation();
loco()



