(function(){
  
  
  window.addEventListener('scroll', (e) => {
    let navHeight = document.querySelector('.navbar').clientHeight;
    if(window.scrollY > navHeight && window.innerWidth < 720){
      document.querySelector('.navbar').classList.add("navbar-fixed");
      document.querySelector('.navbar-btn').style.display = "none";
      document.querySelector('.mobile').style.display = "inline-block";
      e.stopPropagation();
    }
    else{
      document.querySelector('.navbar').classList.remove("navbar-fixed");
      document.querySelector('.navbar-btn').style.display = "inline";
      document.querySelector('.mobile').style.display = "none";
      document.querySelector('.mobile-menu').classList.remove("active");
      mobile = false;
    }
  });

  let mobile = false;
  document.querySelector('.mobile').addEventListener('click', (e) => {
    if(!mobile){
      document.querySelector('.mobile-menu').classList.add("active");
      mobile = true;
      e.stopPropagation();
    }else{
      document.querySelector('.mobile-menu').classList.remove("active");
      mobile = false;
    }
  });
})();