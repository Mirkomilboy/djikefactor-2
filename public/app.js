document.querySelector('.menuBtn').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('translate-x-full');
})


const menuLinks = document.querySelectorAll(".accordion button");
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let menuContent = link.nextElementSibling;
    let active = document.querySelector(".accordion section.active");

    if (menuContent) {
      if (active) {
        if (link.parentElement.classList.contains("active")) {
          link.parentElement.classList.remove("active");
          active.lastElementChild.style.height = "0";
          link.querySelector("svg").style.transform = "rotate(0deg)";
        } else {
          active.classList.remove("active");
          active.querySelector("svg").style.transform = "rotate(0)";
          active.lastElementChild.style.height = "0";
          link.parentElement.classList.add("active");
          menuContent.style.height = menuContent.scrollHeight + "px";
          link.querySelector("svg").style.transform = "rotate(180deg)";
        }
      }
      else {
        link.parentElement.classList.add("active");
        menuContent.style.height = menuContent.scrollHeight + "px";
        link.querySelector("svg").style.transform = "rotate(180deg)";
      }
    }
  });
});
