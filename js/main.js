// открытие гамбургер-меню
const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

// анимированная кнопка переключения светлой и темной темы
const body = document.querySelector("body");
const btn = document.querySelector(".btn__light-dark");
const icon = document.querySelector(".btn__icon");

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value) {
  localStorage.setItem("darkmode", value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load() {
  const darkmode = localStorage.getItem("darkmode");

  //if the dark mode was never activated
  if (!darkmode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (darkmode == "true") {
    //if the dark mode is activated
    body.classList.add("darkmode");
    icon.classList.add("fa-moon");
  } else if (darkmode == "false") {
    //if the dark mode exists but is disabled
    icon.classList.add("fa-sun");
  }
}

load();

btn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  icon.classList.add("animated");

  //save true or false
  store(body.classList.contains("darkmode"));

  if (body.classList.contains("darkmode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});

// подключаем слайдер slick
$(document).ready(function () {
  $(".stock-slider").slick({
    arrows: true, // показать стрелки
    dots: false, // не показывать точки
    slidesToShow: 4, // показывать по n слайдов
    slidesToScroll: 1,
    autoplay: false, // автоматическое проигрывание слайдов
    variableWidth: true,//даем оазрешение на изменение ширины слайда
  });
});

// подключаем второй слайдер slick
$(document).ready(function () {
  $(".rewievs__slider").slick({
    arrows: true, // показать стрелки
    dots: false, // не показывать точки
    slidesToShow: 2, // показывать по n слайдов
    slidesToScroll: 1,
    autoplay: false, // автоматическое проигрывание слайдов

  });
});

// accordeon на главной
		// accordeon
		const accordeon = document.querySelector('.accordeon');
		const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

		accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
			accordeonTitle.addEventListener('click', function () {

				const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
				accordeonTitle.classList.toggle('accordeon__title--active');
				currentText.classList.toggle('accordeon__text--visible');

				if (currentText.classList.contains('accordeon__text--visible')) {
					currentText.style.maxHeight = currentText.scrollHeight + 'px'
				}
				else {
					currentText.style.maxHeight = null
				}

			});
		});