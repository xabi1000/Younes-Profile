import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
let swiperTestimonial = new Swiper('.testimonial__container', {
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
