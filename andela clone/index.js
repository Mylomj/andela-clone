function changebg(){
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if(scrollValue < 150){
    navbar.classList.remove("bgcolor", "navlist");
  }else{
    navbar.classList.add("bgcolor", "navlist");
  }
}
window.addEventListener('scroll',changebg);