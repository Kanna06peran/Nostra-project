var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close-nav")

menuicon.addEventListener("click",function()
{sidenav.style.left=0})

closenav.addEventListener("click",function()
{sidenav.style.left="-50%"})

var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="images/redheart.jpg"
        }
        else{
            e.target.src="images/blackheart.png"
        }
    })
})


var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)