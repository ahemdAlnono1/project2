// menu
let ul =document.querySelector(".container ul")
let li = document.querySelectorAll(".container ul li")
// sections
let gt = document.querySelector(".gt")
let lt = document.querySelector(".lt")
let home = document.querySelector(".home")
let about = document.querySelector(".about")


// to slide 
gt.addEventListener("click" , function(){
  if(home.style.opacity==1 || about.style.opacity == 0 ){
    home.style.animationName = "slipr"
    setTimeout(
      function(){
        home.style.opacity="0"
        about.style.opacity = "1"
        home.style.animationName = ""
        document.querySelector(".checked2").checked = true;
      }
    ,800)
  }
})
lt.addEventListener("click" , function(){
  if(home.style.opacity == 0){
    about.style.animationName = "left-slip";
    setTimeout(function(){
      home.style.opacity = "1"
      about.style.opacity = "0"
      about.style.animationName = ""
      document.querySelector(".checked1").checked = true
    },800)
  }
})
document.querySelector(".checked1").addEventListener("click" , function(){
  about.style.animationName = "left-slip";
  setTimeout(function(){
    home.style.opacity = "1"
    about.style.opacity = "0"
    about.style.animationName = ""
    document.querySelector(".checked1").checked = true
  },800)
})
document.querySelector(".checked2").addEventListener("click" , function(){
  home.style.animationName = "slipr"
  setTimeout(
    function(){
      home.style.opacity="0"
      about.style.opacity = "1"
      home.style.animationName = ""
      document.querySelector(".checked2").checked = true;
    }
  ,800)
})


// handel active li
li.forEach(function(element){
    element.addEventListener('click',
        function(ele){
            document.querySelector(".active").classList.remove("active");
            ele.target.className = "active"
        }
    )
})