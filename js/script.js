const footerYear = document.querySelector(".footer__year");
const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".nav-link");
const navBar=document.querySelector('.nav-bar')
const buttoncheckbox=document.querySelector('.contact__form-btnbox')
const titlenav=document.querySelector('.title-nav')

let checkbox = document.getElementById("accept");
checkbox.addEventListener( "change", () => {
   if ( checkbox.checked ) {
	   buttoncheckbox.classList.remove("disabled")
	} else {
		buttoncheckbox.classList.add("disabled")
	}
});

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

// const btnClip = document.querySelector(".arrow-info");
// const btnClipBack = document.querySelector(".arrow-info-back");
// const infoBoxR = document.querySelector(".info__box-reverse");
// const infoBox = document.querySelector(".info__box");

// const clip = () => {
// infoBoxR.style.clipPath= "circle(140% at 92% 88%)";
// infoBoxR.style.opacity= "1";
// btnClip.style.opacity= "0";
// btnClipBack.style.display= "block"
// };

// btnClip.addEventListener("click", clip)

// const clipBack = () => {
// infoBoxR.style.clipPath= "circle(0% at 92% 88%)";
// btnClip.style.opacity= "1";
// btnClipBack.style.display= "none"
// }

// btnClipBack.addEventListener("click", clipBack)

const btnsObverse = document.querySelectorAll(".arrow-info");
btnsObverse.forEach((b) => {
	b.addEventListener("click", function (e) {
		let infoCardReverse = e.target
			.closest(".info__card")
			.querySelector(".info__box-reverse");
		infoCardReverse.style.clipPath = "circle(140% at 92% 88%)";
		infoCardReverse.style.opacity = "1";
	});
});
const btnsReverse = document.querySelectorAll(".arrow-info-back");
btnsReverse.forEach((bR) => {
	bR.addEventListener("click", function (e) {
		let infoCardReverse = e.target
			.closest(".info__card")
			.querySelector(".info__box-reverse");
		infoCardReverse.style.clipPath = "circle(0 at 92% 88%)";
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
