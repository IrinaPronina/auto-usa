$(function () {
  $('.gallery__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  
});


const animItems = document.querySelectorAll('.anim-items');
/* let scrollY = 0; */

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

const lists = document.querySelectorAll('.faq-sub');
const btns = document.querySelectorAll('.faq__link');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btns.forEach((btnItem, idx) => {

      if (btnItem === btn) {
        btnItem.classList.toggle('faq__link--active');
        lists[idx].classList.toggle('hidden');
      }
      else {
        btnItem.classList.remove('faq__link--active');
        lists[idx].classList.add('hidden');
      }
    });
  });
});

const modalBtn = document.querySelector('.header__content-btn');
const modalBtn2 = document.querySelector('.service__content-btn');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  modal.classList.remove('hide');
});

modal.addEventListener("click", (event) => {

  if(event.target.classList.contains('overlay') || event.target.classList.contains('modal__close')) {
    modal.classList.add('hide');
  }
});

modalBtn2.addEventListener('click', () => {
  modal.classList.remove('hide');
});

modal.addEventListener("click", (event) => {

  if(event.target.classList.contains('overlay') || event.target.classList.contains('modal__close')) {
    modal.classList.add('hide');
  }
});