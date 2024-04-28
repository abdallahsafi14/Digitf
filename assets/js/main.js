let searchIcon = document.querySelector("#search");
let searchInput = document.querySelector("#search-input");
let showInput = false;
let navBar = document.querySelector("#navBar");

//handling search icon
searchIcon.onclick = function () {
  if (showInput == false) {
   
      searchInput.style.cssText =
        "width:185px !important; border-bottom: 1px solid white !important ";
    
    showInput = !showInput;
  } else {
    searchInput.style.cssText = "width:0px ; border:none !important";
    showInput = !showInput;
  }
};
// handling navBar
window.onscroll = function () {
  if (window.scrollY >= 15) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }

};

// handling link-item 
let links = document.querySelectorAll(".navbar-nav .nav-link") ;

links.forEach((e) => {
  e.onclick = function(event){
    links.forEach(el => {
      el.classList.remove("active");
      e.classList.add("active")
    })
  }
})