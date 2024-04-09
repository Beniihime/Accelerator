<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <header>
        <div class="py-3 py-md-4" style="min-height: 100vh;">
          <div class="container-xxl">
            <div class="d-flex align-items-center justify-content-center justify-content-md-start gap-4 gap-md-5 mb-4 mb-md-6">
              <a href="https://sibadi.org/">
                <img class="logo" style="max-height: 5rem;" src="@/assets/sibadi.png" alt="sibadi">
              </a>
              <a href="https://univertechpred.ru/">
                <img class="logo" style="max-height: 6rem;" src="@/assets/PUTP.png" alt="putp">
              </a>
              <a href="https://vk.com/point.omsk">
                <img class="logo" style="max-height: 5rem;" src="@/assets/dot.png" alt="dot">
              </a>
            </div>
            <div class="row align-items-center mb-7">
              <div class="col-md-6 pt-md-0">
                <div class="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none fs-0 text-center text-md-start title">
                  Акселератор
                  <br>
                  <span class="secondLine">-0+500.Сибирь</span>
                </div>
                <div class="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block fs-cqw text-center text-md-start title">
                  Акселератор
                  <br>
                  <span class="secondLine">-0+500.Сибирь</span>
                </div>
                <div class="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block fs-cqw text-center text-md-start slogan">
                  Слоган
                </div>
                <div class="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none fs-0 text-center text-md-start slogan">
                  Слоган
                </div>
                <div class="d-flex gap-3 gap-md-4  tit-1 justify-content-center d-inline d-md-none">
                  <p class="napr">Автонет</p>
                  <p class="napr">Технет</p>
                  <p class="napr">Нейронет</p>
                </div>
                <div class="d-flex gap-3 gap-md-4 d-none d-xs-none d-sm-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex tit-cqw">
                  <p class="napr">Автонет</p>
                  <p class="napr">Технет</p>
                  <p class="napr">Нейронет</p>
                </div>
                <div class="row align-items-center mt-2">
                  <div class="col-md-6 text-center">
                    <a href="" class="btn btn-danger" role="button">Подать заявку</a>
                  </div>
                  <div class="col-md-6 mt-3 mt-md-0 text-center subtitle">
                    c 11 марта по 17 апреля
                  </div>
                </div>
                <div class="d-flex fs-4 gap-5 text-white mt-4 mt-md-6 justify-content-center justify-content-md-start">
                  <a href="https://t.me/akseleretor_sibadi">
                    <telegram class="logo" />
                  </a>
                  <a href="https://vk.com/club225258283">
                    <vk class="logo"/>
                  </a>
                  <a href="mailto:projectoffice@sibadi.org">
                    <email class="logo"/>
                  </a>
                </div>
              </div>
              <div class="col-md-6 order-first order-md-last">
                <!-- лого -->
              </div>
            </div>
          </div>
        </div>
      </header>
    </swiper-slide>
    <swiper-slide>
      <div class="container-xxl">
        <h2 class="titleNapr mt-4 mb-3">Направления акселератора</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="p-4 h-100 rounded-3" style="background-color: #fff;">
              <h3 class="napr" style="color: #6843fe; text-align: center;">Автонет</h3>
            </div>
          </div>
          <div class="col">
            <div class="p-4 h-100 rounded-3" style="background-color: #fff;">
              <h3 class="napr" style="color: #6843fe; text-align: center;">Технет</h3>
            </div>
          </div>
          <div class="col">
            <div class="p-4 h-100 rounded-3" style="background-color: #fff;">
              <h3 class="napr" style="color: #6843fe; text-align: center;">Нейронет</h3>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="container-xxl document">
        <h2 class="titleNapr mt-5 mb-3" style="text-align: center;">Что вас ждет?</h2>
        <div class="row align-items-center">
          <div class="col-md-6 pt-md-0">
            <img class="img-fluid rounded-4" src="@/assets/photo1.jpg" alt="">
          </div>
          <div class="col-md-6 order-first order-md-last">
            <div class="row">
              <div class="col-auto">
                <chevron_double />
              </div>
              <div class="col ps-0">
                <p class="ab">Доступ к образовательному контенту и расширенной базе знаний</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <chevron_double />
              </div>
              <div class="col ps-0">
                <p class="ab">Создание своей команды <br> и работа с единомышленниками</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <chevron_double />
              </div>
              <div class="col ps-0">
                <p class="ab">Помощь  экспертов <br> и предпринимателей</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <chevron_double />
              </div>
              <div class="col ps-0">
                <p class="ab">Знакомство и общение  с <br> инвесторами, возможными партнерами и потенциальными клиентами</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <chevron_double />
              </div>
              <div class="col ps-0 py-2">
                <p class="ab">Привлечение финансирования</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="container-xxl">
        <h2 class="titleNapr mt-5 mb-3" style="text-align: center;">Программа акселератора</h2>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="container-xxl document py-5 mt-5">
        <div class="row">
          <div class="col-md-6 pt-md-0">
            <h2 class="titleNapr mt-2 mb-3">Приходи если у тебя...</h2>
            <div class="row">
              <div class="col-auto">
                <check />
              </div>
              <div class="col">
                <p class="ab">Есть идея проекта, есть команда, нужна помощь в развитии и инвестиции</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <check />
              </div>
              <div class="col">
                <p class="ab">Есть идея, но нет команды, не знаешь с чего начать</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <check />
              </div>
              <div class="col">
                <p class="ab">Нет идеи, но очень хочешь попробовать</p>
              </div>
            </div>
            
          </div>
          <div class="col-md-6 order-first order-md-last">
            <img src="@/assets/winner.jpg" alt="">
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  import telegram from '@/assets/telegram.svg'
  import email from '@/assets/email.svg'
  import vk from '@/assets/vk.svg'
  import chevron_double from '@/assets/chevron-double.svg'
  import check from '@/assets/check.svg'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Mousewheel, Pagination } from 'swiper/modules';

  export default {
    components: {
      telegram,
      email,
      vk,
      chevron_double,
      check,
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Mousewheel, Pagination],
      };
    },
  }
</script>

<style>
.document {
  background-color: #fff;
  border-radius: 1.125rem;
}
.ab {
  font-size: 3vmin;
  font-weight: 700;
}
.titleNapr {
  color: #FF2323;
  font-size: 6vmin;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
}
.subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 3vmin;
  font-weight: 500;
}
.btn-danger {
  border-radius: .75rem;
  color: white;
  background-color: #FF2323;
  font-size: 1.5rem;
  padding-inline: 3rem;
  padding-block: 1rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
}
.btn-danger:hover {
  background-color: #c82333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 11vmin;
  color: white;
  font-weight: 700;
  line-height: normal;
}
.secondLine {
  color: #FF2323;
}
.slogan {
  font-size: 7vmin;
  font-weight: 700;
  color: white;
}
.napr {
  font-family: 'DM Sans', sans-serif ;
  font-size: 5vmin;
  font-weight: 700;
  color: white;
}
header {
  background: linear-gradient(rgba(17, 15, 44, .6), rgba(17, 15, 44, .8)), url(
    @/assets/background.jpg) center;
  background-size: cover;
  color: white;
}

.logo {
  transform: scale(1);
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
  path.teleg {
    fill: #31baff;
  }
  path.vk {
    fill: #0077ff;
  }
  g.email {
    fill: #f7d33c;
  }
  path.email {
    fill: #fff;
  }
}

img {
  border-radius: 1.125rem;
}

</style>
