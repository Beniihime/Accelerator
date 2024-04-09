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
        <div class="py-3 py-md-4 d-flex align-items-baseline" style="min-height: 100vh;">
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
                    <a href="https://leader-id.ru/events/494095" class="btn btn-danger" role="button">Подать заявку</a>
                  </div>
                  <div class="col-md-6 mt-3 mt-md-0 text-center subtitle">
                    c 15 апреля по 15 ноября
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
                <div class="col d-flex justify-content-center mt-4 mt-md-0 mb-3">
                  <img class="acc" style="max-width: 20vmax;" src="@/assets/-0+500.png" alt="-0+500">
                </div>
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
    <swiper-slide class="d-flex">
      <div class="container-xxl document">
        <h2 class="titleNapr mt-3 mb-3" style="text-align: center;">Что вас ждет?</h2>
        <div class="row align-items-center">
          <div class="col-md-6 pt-md-0 mb-3">
            <img class="img-fluid rounded-4" src="@/assets/photo1.jpg" alt="">
          </div>
          <div class="col-md-6 order-first order-md-last">
            <div class="row">
              <div class="col-auto">
                <chevron_double />
              </div>
              <div class="col ps-0">
                <p class="ab">Доступ к образовательному <br> контенту и расширенной базе знаний</p>
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
              <div class="col ps-0 py-1">
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
    <swiper-slide class="d-flex">
      <div class="container-xxl document py-4 px-4 mt-5">
        <div class="row align-items-center">
          <h2 class="titleNapr mt-3 mt-md-2 mb-md-5 mb-3">Приходи если у тебя...</h2>
          <div class="col-md-6 pt-md-0">
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
    <swiper-slide class="d-flex">
      <div class="container-xxl document py-4 px-4 mt-5">
        <div class="row align-items-center">
          <h2 class="titleNapr mt-3 mt-md-2 mb-md-4 mb-3">Причины, чтобы подать заявку</h2>
          <div class="col-md-6 order-md-1 order-first">
            <img src="@/assets/winner.jpg" alt="">
          </div>
          <div class="col-md-6 pt-md-0 order-md-2">
            <div class="row align-items-center">
              <div class="col-auto">
                <search />
              </div>
              <div class="col">
                <span class="ab">Подарки от партнёров</span>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <search />
              </div>
              <div class="col mt-3">
                <p class="ab">Сертификат о прохождении акселерационной программы</p>
              </div>
            </div>
          </div>
          <p class="order-md-3 mt-3 mb-0 subsubtitle">Твой проект будут поддерживать опытные наставники, трекеры,  и эксперты, а индустриальные партнеры подскажут в каком направлении стоит развиваться!</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl document py-4 px-4 mt-5 ell">
        <div class="ellipse">
          <img src="@/assets/ellipse.png" alt="">
        </div>
        <div class="row align-items-center">
          <h2 class="titleNapr mt-2 mb-4">А дальше...</h2>
          <div class="col-md-7">
            <div class="row">
              <div class="col-auto">
                <check_double />
              </div>
              <div class="col">
                <p class="ab">Защита ВКР в формате <br> «Диплом как стартап»</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <check_double />
              </div>
              <div class="col">
                <p class="ab">Сопровождение проекта от инвесторов и поддержка  в дальнейшем развитии проекта</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <check_double />
              </div>
              <div class="col">
                <p class="ab">Возможность получения гранта в размере 1 000 000 рублей <br> от Фонда Содействия Инновациям</p>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <check_double class="last"/>
              </div>
              <div class="col">
                <p class="ab">Зачёт автоматом по дисциплине «Основы проектной деятельности»</p>
              </div>
            </div>
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
  import search from '@/assets/search.svg'
  import check_double from '@/assets/check_double.svg'

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
      search,
      check_double,
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

<style scoped>
.ellipse {
  position: absolute;
  top: 50px;
  left: 200px;
  transform: scale(.8);
}
.ell {
  position: relative;
}
.document {
  background-color: #fff;
  border-radius: 1.125rem;
}
.ab {
  font-size: 3.5cqmin;
  font-weight: 700;
  line-height: normal;
}
.titleNapr {
  color: #FF2323;
  font-size: 3cqmax;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
}
.subsubtitle {
  font-size: 2cqmax;
  font-weight: 700;
  font-style: italic;
  color: #6843fe;
  
}
.subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 2.5cqmin;
  font-weight: 500;
}
.btn-danger {
  border-radius: .75rem;
  color: white;
  background-color: #FF2323;
  font-size: 3cqmin;
  padding-inline: 2rem;
  padding-block: 1rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
}
.btn-danger:hover {
  background-color: #c82333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 5cqmax;
  color: white;
  font-weight: 700;
  line-height: normal;
}
.secondLine {
  color: #FF2323;
}
.slogan {
  font-size: 3.78cqmax;
  font-weight: 700;
  color: white;
}
.napr {
  font-family: 'DM Sans', sans-serif ;
  font-size: 2.5cqmax;
  font-weight: 700;
  color: white;
}
header {
  background: linear-gradient(rgba(17, 15, 44, .6), rgba(17, 15, 44, .8)), url(
    @/assets/background.jpg) center;
  background-size: cover;
  color: white;
}

</style>
