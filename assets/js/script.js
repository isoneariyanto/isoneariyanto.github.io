let navigate = document.querySelector(".nav");
let item = document.querySelectorAll(".nav-item");
for (let nav of item) {
  nav.addEventListener("click", function (event) {
    navigate.querySelector(".active").classList.remove("active");
    nav.setAttribute("class", "nav-item active");
  });
}

let sc = document.querySelectorAll("section");

const onscrool = () => {
  let pos = document.documentElement.scrollTop;

  for (let section of sc) {
    if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
      console.log(section.attributes.id);
    }
  }
};
