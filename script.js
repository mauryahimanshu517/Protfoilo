function valuesetter(){
    gsap.set("#nav",{y:"0%",opacity:1})
    gsap.set("#home span .child",{y:"100%"})
    gsap.set("#home .row img",{opacity:0})

    document.querySelectorAll("#Visual>g").forEach(function(e) {
        var character = e.childNodes[0].childNodes[0];
    });
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

function cardshovereffect(){
document.querySelectorAll(".cnt").forEach(function(cnt){
    var showingimage;
    cnt.addEventListener("mousemove",function(dets){
        console.log(dets.target.dataset.index);
        console.log(document.querySelector("#cursor").children[dets.target]);
        
        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
        showingimage=dets.target
        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
        showingimage.style.filter="grayscale(1)";
        document.querySelector("#work").style.backgroundColor="#"+dets.target.dataset.color;
    })
    cnt.addEventListener("mouseleave",function(dets){
        
        document.querySelector("#cursor").children[showingimage.dataset.index].style.opacity=0;
        showingimage.style.filter="grayscale(0)"
        document.querySelector("#work").style.backgroundColor="#fff ";

    })
})
}
function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function card(){
    
    var cardElement=document.querySelector(".sidebar");
    var cross=document.querySelector(".cross")
    var social=document.querySelector(".media")
    var aboutdiv=document.querySelector("body")
    var touch=document.querySelector(".Touch")

    social.addEventListener("click",function(){
        
        cardElement.style.left="0%";
        aboutdiv.style.overflowY = 'hidden';
        touch.style.pointerEvents = "none";

    })
    cross.addEventListener('click',function(){
        cardElement.style.left="-100%";
        aboutdiv.style.overflowY = 'initial';
        touch.style.pointerEvents = "auto";
        
    })
}

function getintouch(){
    var gettouch=document.querySelector(".getintouch")
    var getintouchs=document.querySelector("#getintouchs")
    var touch=document.querySelector(".Touch")
    var btn=document.querySelector(".btn")
    var aboutdiv=document.querySelector("body")
    var social=document.querySelector(".media")

    touch.addEventListener("click",function(){
       gettouch.style.right="10%"; 
       getintouchs.style.right="-30%"
       aboutdiv.style.overflowY = 'hidden';
       social.style.pointerEvents = "none";
    })
    btn.addEventListener("click",function(event){
      gettouch.style.right="-150%"
      aboutdiv.style.overflowY = "initial";
      social.style.pointerEvents = "auto";
        
    })
}

let linkClicked = false;

        // Function to handle the link click and scrolling to the "About" section
        function scrollToAbout() {
            if (!linkClicked) {
                // Scroll to the "About" section on the first click
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                linkClicked = true;
            } else {
                // Refresh the page on subsequent clicks
                location.reload();
            }
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
// loco();
revealtospan();
valuesetter();
loaderAnimation();
cardshovereffect();
card();
getintouch();