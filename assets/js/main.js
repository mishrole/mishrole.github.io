const menuContainer = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".menu__hamburger");
const sidemenu = document.querySelector(".sidemenu");
const menuOptionsItem = document.querySelector(".sidemenu__options__item");
const sideMenuSecondChild = document.querySelector(
  ".sidemenu__options__item:nth-child(2)"
);
const sideMenuThirdChild = document.querySelector(
  ".sidemenu__options__item:nth-child(3)"
);

const autoscroll = document.querySelectorAll(".autoscroll");
const scrollButton = document.querySelector(".scroll__button");

const menuAnimationElements = [
  menuOptionsItem,
  sideMenuSecondChild,
  sideMenuThirdChild,
];

menuContainer.addEventListener("click", () => {
  if (sidemenu.classList.contains("active")) {
    setTimeout(() => {
      sidemenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }, 300);
  } else {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 350);
  }

  hamburgerMenu.classList.toggle("animate");
  sidemenu.classList.add("active");

  for (let i in menuAnimationElements) {
    menuAnimationElements[i].classList.toggle("active");
  }
});

autoscroll.forEach((element) =>
  element.addEventListener("click", (e) => {
    e.preventDefault();
    autoScroll(e.target.getAttribute("href"));
  })
);

scrollButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#work").scrollIntoView({ behavior: "smooth" });
});

const autoScroll = (scrollTo) => {
  sidemenu.classList.remove("active");
  hamburgerMenu.classList.toggle("animate");
  document.body.style.overflow = "auto";

  for (let i in menuAnimationElements) {
    menuAnimationElements[i].classList.toggle("active");
  }

  setTimeout(() => {
    document.querySelector(scrollTo).scrollIntoView({ behavior: "smooth" });
  }, 500);
};
