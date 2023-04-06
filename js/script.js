const footerYear = document.querySelector(".footer__year");
const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".nav-bar");
const buttoncheckbox = document.querySelector(".contact__form-btnbox");
const titlenav = document.querySelector(".title-nav");

const handleNav = () => {
	navMobile.classList.toggle("nav-mobile--active");

	navBtn.classList.toggle("is-active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navBtn.classList.remove("is-active");
		});
	});
	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
		});
	});
};

navBtn.addEventListener("click", handleNav);

function addShadow() {
	if (window.scrollY >= 530) {
		navBar.classList.add("shadow-bg");
		titlenav.classList.remove("hide");
	} else {
		navBar.classList.remove("shadow-bg");
		titlenav.classList.add("hide");
	}
}
window.addEventListener("scroll", addShadow);

//=============================================================

const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-btn");

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie");
	if (cookieEaten) {
		cookieBox.classList.add("hide");
	}
};

const handleCookieBox = () => {
	localStorage.setItem("cookie", "true");
	cookieBox.classList.add("hide");
};

cookieBtn.addEventListener("click", handleCookieBox);
showCookie();

//=============================================================

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

//==================================================

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
	ScrollTrigger.create({
		trigger: elem,
		start: "top 80%",
		end: "bottom 20%",
		markers: false,
		onEnter: function () {
			gsap.fromTo(
				elem,
				{ y: 100, autoAlpha: 0 },
				{
					duration: 1.25,
					y: 0,
					autoAlpha: 1,
					ease: "back",
					overwrite: "auto",
				}
			);
		},
		onLeave: function () {
			gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
		},
		onEnterBack: function () {
			gsap.fromTo(
				elem,
				{ y: -100, autoAlpha: 0 },
				{
					duration: 1.25,
					y: 0,
					autoAlpha: 1,
					ease: "back",
					overwrite: "auto",
				}
			);
		},
		onLeaveBack: function () {
			gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
		},
	});
});

//=================================================

let mybutton = document.querySelector(".goToTopBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 370 ||
		document.documentElement.scrollTop > 370
	) {
		mybutton.classList.add("top_btn_appear");
	} else {
		mybutton.classList.remove("top_btn_appear");
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//====================================================
let checkbox = document.getElementById("accept");
checkbox.addEventListener("change", () => {
	if (checkbox.checked) {
		buttoncheckbox.classList.remove("disabled");
	} else {
		buttoncheckbox.classList.add("disabled");
	}
});

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
	const formData = new FormData(form);
	e.preventDefault();
	var object = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	var json = JSON.stringify(object);
	result.classList.add("response-text");
	result.innerHTML = "Proszę czekać...";

	fetch("https://api.web3forms.com/submit", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: json,
	})
		.then(async (response) => {
			let json = await response.json();
			if (response.status == 200) {
				result.innerHTML = json.message;
				result.classList.remove("response-text");
				result.innerHTML = "Dziękuję. Skontaktuję się z Tobą niebawem!";
				result.classList.add("response-text--color");
			} else {
				console.log(response);
				result.innerHTML = json.message;
				result.classList.remove("response-text");
				result.classList.add("response-text--red");
			}
		})
		.catch((error) => {
			console.log(error);
			result.innerHTML =
				"Coś poszło nie tak. Proszę sprawdź poprawność danych bądź kontakt telefoniczny.";
		})
		.then(function () {
			form.reset();
			setTimeout(() => {
				result.style.display = "none";
			}, 5000);
		});
});

//===================================================

VanillaTilt.init(document.querySelectorAll(".info__card"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare":.5,
});

//=====================================================

