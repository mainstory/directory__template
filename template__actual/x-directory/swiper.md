### ======================================= Подключение 1 =======================================

# <script>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

### ======================================= Инициализация 2 =======================================

# <js>
new Swiper('.swiper', {

}); 

# <html>

wrapper
swiper
swiper-wrapper
swiper-slide

swiper-button-prev
swiper-button-next
swiper-pagination

# <css>

.wrapper {
   position: relative;
}
.swiper {
   overflow: hidden;
}
.swiper-wrapper {
   display: inline-flex;
}


.swiper-pagination {
   display: flex;
   gap: 30px;
   justify-content: center;
   position: absolute;
   bottom: -60px;
   left: 50%;
   transform: translateX(-50%);
}
.swiper-pagination-bullet {
   width: 20px;
   height: 20px;
   display: block;
   border-radius: 30px;
   background-color: #fff;
   cursor: pointer;
}
.swiper-pagination-bullet-active {
   background-color: rgb(224, 39, 101);
   cursor: pointer;
}

### ======================================= Настройки 3 =======================================

# =========================================== Основная заготовка

new Swiper('.swiper', {
   slidesPerView: 3,
   spaceBetween: 30,
   grabCursor: true,
   loop: true,
   autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
}); 


# =========================================== к-во слайдов для показа

slidesPerView: 3,

# =========================================== gap 

spaceBetween: 30,

# =========================================== рука вместо курсора

grabCursor: true,

# ===========================================  дефолт стрелки

<div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>

navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
},

# =========================================== дефолт кружки

<div class="swiper-pagination"></div>

pagination: {
      el: '.swiper-pagination',
      clickable: true,
},

# =========================================== автопрокрутка

autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
}
# =========================================== автовысота

autoHeight: true,

# =========================================== адаптивность

breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   }

