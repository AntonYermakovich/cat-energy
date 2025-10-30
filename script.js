const burger = document.querySelector(".header__icon");

burger.addEventListener("click", openMenu);

function openMenu() {
  this.classList.contains("header__icon_active")
    ? this.classList.remove("header__icon_active")
    : this.classList.add("header__icon_active");
}
