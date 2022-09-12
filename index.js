
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

 document.querySelectorAll(".nav-link").forEach( n=> n.
  addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }))


  var tabLinks = document.getElementsByClassName("tab-links");  
  var tabContents = document.getElementsByClassName("tab-contents");
  
  function opentab(tabname){
    for(tabLink of tabLinks){
      tabLink.classList.remove("active-link"); 
    }
    for(tabContent of tabContents){
      tabContent.classList.remove("active-tab"); 
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

