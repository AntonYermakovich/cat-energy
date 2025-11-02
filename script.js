const burger = document.querySelector(".header__icon");
const slider = document.querySelector(".slider");
const range = document.querySelector(".slider__range input");

burger.addEventListener("click", openMenu);

function openMenu() {
  this.classList.contains("header__icon_active")
    ? this.classList.remove("header__icon_active")
    : this.classList.add("header__icon_active");
}

range.addEventListener("input", () => {
  slider.style.setProperty("--value", range.value + "%");
});

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323037],
    zoom: 16,
  });

  myMap.controls.remove("geolocationControl"); // удаляем геолокацию
  myMap.controls.remove("searchControl"); // удаляем поиск
  myMap.controls.remove("trafficControl"); // удаляем контроль трафика
  myMap.controls.remove("typeSelector"); // удаляем тип
  myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
  myMap.controls.remove("rulerControl"); // удаляем контрол правил
  myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  let myPlacemark = new ymaps.Placemark(
    myMap.getCenter(),
    {
      hintContent: "Наш главный офис",
      balloonContent: "Добро пожаловать! Здесь находится наша компания.",
    },
    {
      // Настройки своей иконки
      iconLayout: "default#image",
      iconImageHref: "./assets/img/pin.png", // Путь к вашей картинке
      iconImageSize: [100, 100], // Размер иконки [ширина, высота]
      iconImageOffset: [-50, -100], // Смещение (чтобы острие метки указывало точно на координаты)
    }
  );

  myMap.geoObjects.add(myPlacemark);

  window.innerWidth >= 1024 && myMap.setCenter([59.938631, 30.316]); // Уменьшаем долготу = смещение вправо
}
