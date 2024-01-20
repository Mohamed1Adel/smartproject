const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".navbar-nav > li a").forEach(link =>{
        if(link.href.includes(`${activePage}`)){
            link.parentElement.classList.add("active");
        }
})
const navs = document.querySelectorAll(".navbar-nav > li");
navs.forEach((nav) => {
  nav.addEventListener("click", function ()  {
    navs.forEach((nav) => {
      nav.classList.remove("active");
    });
    nav.classList.add("active");
  });
});





