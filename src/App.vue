<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="10"
    :mousewheel="true"
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
    @swiper="setSwiperRef"
  >
    <swiper-slide>
      <header>
        <div class="py-3 py-md-4 d-flex align-items-baseline" style="min-height: 100dvh;">
          <div class="container-xxl">
            <div class="d-flex align-items-center justify-content-center justify-content-md-start gap-4 gap-md-5 mb-4 mb-md-6">
              <a href="https://sibadi.org/">
                <img class="logo" style="max-height: 5rem;" src="@/assets/logo/sibadi.png" alt="sibadi">
              </a>
              <a href="https://univertechpred.ru/">
                <img class="logo" style="max-height: 6rem;" src="@/assets/logo/PUTP.png" alt="putp">
              </a>
              <a href="https://vk.com/point.omsk">
                <img class="logo" style="max-height: 5rem;" src="@/assets/logo/dot.png" alt="dot">
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
                  <img class="acc" style="max-width: 21vmax;" src="@/assets/logo/-0+500.png" alt="-0+500">
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl">
        <h2 class="titleNapr mt-2 mb-3">Направления акселератора</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
          <div class="col">
            <div class="p-4 h-100" style="background-color: #fff; border-radius: 1rem;">
              <h3 class="napr-about" style="color: #6843fe; text-align: center;">Автонет</h3>
              <p style="font-size: 1rem;">
                Рынок "Автонет" активно развивается, 
                становится ключевым для интеграции современных технологий в автомобильную индустрию.
                Этот рынок направлен на обеспечение устойчивого роста национальной экономики, 
                создание рабочих мест и обеспечение национальной безопасности.           
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-4 h-100" style="background-color: #fff; border-radius: 1rem;">
              <h3 class="napr-about" style="color: #6843fe; text-align: center;">Технет</h3>
              <p style="font-size: 1rem;">
                Рынок высокотехнологичных продуктов и услуг для цифровой экономики, 
                способствует развитию инноваций, оптимизации производства
                и повышению конкурентоспособности компаний.          
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-4 h-100" style="background-color: #fff; border-radius: 1rem;">
              <h3 class="napr-about" style="color: #6843fe; text-align: center;">Нейронет</h3>
              <div style="font-size: 1rem;"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl document p-4 mx-2">
        <h2 class="titleNapr" style="text-align: center;">Что вас ждет?</h2>
        <div class="row align-items-center">
          <div class="col-md-6 pt-md-0 mb-3">
            <img class="img-fluid rounded-4" src="@/assets/photos/photo1.jpg" alt="">
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
      <div class="container-xxl document p-4 mx-2">
        <div class="row align-items-center px-3">
          <h2 class="titleNapr mt-2 mt-md-1 mb-md-4 mb-2">Приходи если у тебя...</h2>
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
            <div class="col-md-6 mt-2">
              <a href="https://leader-id.ru/events/494095" class="btn btn-danger" role="button">Подать заявку</a>
            </div>
          </div>
          <div class="col-md-6 order-first order-md-last mb-3">
            <img src="@/assets/photos/winner.jpg" alt="">
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl document p-4 mx-2">
        <div class="row align-items-center px-3">
          <h2 class="titleNapr mt-2 mt-md-1 mb-md-4 mb-2">Причины, чтобы подать заявку</h2>
          <div class="col-md-6 order-md-1 order-first">
            <img src="@/assets/photos/photo2.jpg" alt="">
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
                <p class="ab mb-0">Сертификат о прохождении акселерационной программы</p>
              </div>
            </div>
            <div class="col-md-6 p-0 my-4">
              <a href="https://leader-id.ru/events/494095" class="btn btn-danger" role="button">Подать заявку</a>
            </div>
          </div>
          <p class="order-md-3 subsubtitle mt-md-4">Твой проект будут поддерживать опытные наставники, трекеры,  и эксперты, а индустриальные партнеры подскажут в каком направлении стоит развиваться!</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl document p-4 px-md-5 mx-2">
        <div class="row align-items-center px-3 px-md-4 py-md-4 ell">
          <div class="ellipse top-25">
            <ell />
          </div>
          <h2 class="titleNapr mb-5">А дальше...</h2>
          <div class="col-md-auto" style="z-index: 1;">
            <div class="row align-items-center">
              <div class="col-auto">
                <check_double />
              </div>
              <div class="col">
                <p class="ab mb-0">Защита ВКР в формате «Диплом как стартап»</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <check_double />
              </div>
              <div class="col">
                <p class="ab">Сопровождение проекта от инвесторов и поддержка  в дальнейшем развитии проекта</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <check_double />
              </div>
              <div class="col">
                <p class="ab">Возможность получения гранта в размере 1 000 000 рублей <br> от Фонда Содействия Инновациям</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <check_double class="last"/>
              </div>
              <div class="col">
                <p class="ab mb-0">Зачёт автоматом по дисциплине «Основы проектной деятельности»</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl document p-4 px-md-5 mx-2">
        <div class="row align-items-center px-3 px-md-4 py-md-4">
          <h2 class="titleNapr text-center mb-3">Условия участия</h2>
          <div class="col-md-auto">
            <div class="row align-items-center">
              <div class="col-auto">
                <chevron_double_up />
              </div>
              <div class="col">
                <p class="ab mb-0">Соответствие проекта представленным направлениям</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <chevron_double_up />
              </div>
              <div class="col">
                <p class="ab">Студент, магистрант, аспирант, научный сотрудник 
                  или преподаватель из любого вуза</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <chevron_double_up />
              </div>
              <div class="col">
                <p class="ab mb-0">Возраст от 18 до 35 лет</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <chevron_double_up />
              </div>
              <div class="col">
                <p class="ab mb-0">Стадия готовности проекта – идея или готовый прототип</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl p-4">
        <div class="row px-3 px-md-4 py-md-4">
          <h2 class="titleNapr text-center">Кто сопровождает проекты?</h2>
          <div class="row row-cols-1 row-cols-md-2 g-2">
            <div class="col">
              <div class="document p-4 h-100">
                <h2 class="subsubtitle" style="font-style: normal;">Наставник</h2>
                <p class="ab">помогает командам адаптироваться и решать организационные вопросы в ходе акселерационной программы</p>
              </div>
            </div>
            <div class="col">
              <div class="document p-4 h-100">
                <h2 class="subsubtitle" style="font-style: normal;">Трекер</h2>
                <p class="ab">проводит еженедельные встречи с командой проекта для поиска точек роста</p>
              </div>
            </div>
            <div class="col">
              <div class="document p-4 h-100">
                <h2 class="subsubtitle" style="font-style: normal;">Ментор</h2>
                <p class="ab">консультант по предметному направлению проекта</p>
              </div>
            </div>
            <div class="col">
              <div class="document p-4 h-100">
                <h2 class="subsubtitle" style="font-style: normal;">Эксперт</h2>
                <p class="ab">участвует в отборе и оценке проектов, проводит лекции и мастер-классы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="d-flex">
      <div class="container-xxl p-4">
        <h2 class="titleNapr text-center mb-4 mb-md-5">Эксперты акселератора</h2>
        <div class="row row-cols-2 row-cols-md-4 g-4">
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp01.jpeg" alt="Василий Быков">
              <h3 class="exp mt-2 text-center">Василий Быков</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp02.jpeg" alt="Андрей Визминтинов">
              <h3 class="exp mt-2 text-center">Андрей Визминтинов</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp03.jpg" alt="Петр Козлов">
              <h3 class="exp mt-2 text-center">Петр Козлов</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp04.jpg" alt="Константин Курдюмов">
              <h3 class="exp mt-2 text-center">Константин Курдюмов</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp05.jpeg" alt="Виталий Мещеряков">
              <h3 class="exp mt-2 text-center">Виталий Мещеряков</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp06.jpeg" alt="Сергей Мочалин">
              <h3 class="exp mt-2 text-center">Сергей Мочалин</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp07.jpg" alt="Генналий Салимгареев">
              <h3 class="exp mt-2 text-center">Генналий Салимгареев</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp08.png" alt="Александр Сальников">
              <h3 class="exp mt-2 text-center">Александр Сальников</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp09.jpeg" alt="Анатолий Шастин">
              <h3 class="exp mt-2 text-center">Анатолий Шастин</h3>
            </div>
          </div>
          <div class="col">
            <div class="">
              <img class="exp" src="@/assets/experts/exp10.jpeg" alt="Анатолий Шонин">
              <h3 class="exp mt-2 text-center">Анатолий Шонин</h3>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <button class="btnUp" @click="$event => slideTo(1)">
      <i class="bi-chevron-up"></i>
    </button>
  </swiper>
</template>



<script>
  import telegram from '@/assets/logo/telegram.svg'
  import email from '@/assets/logo/email.svg'
  import vk from '@/assets/logo/vk.svg'
  import chevron_double from '@/assets/someSVG/chevron-double.svg'
  import check from '@/assets/someSVG/check.svg'
  import search from '@/assets/someSVG/search.svg'
  import check_double from '@/assets/someSVG/check_double.svg'
  import ell from '@/assets/someSVG/ellipse.svg'
  import chevron_double_up from '@/assets/someSVG/chevron_double_up.svg'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      telegram,
      email,
      vk,
      chevron_double,
      check,
      search,
      check_double,
      ell,
      chevron_double_up,
      Swiper,
      SwiperSlide,
    },
    setup() {
      let swiperRef = null;

      const setSwiperRef = (swiper) => {
        swiperRef = swiper;
        
      };
      const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 700);
      };
      return {
        modules: [Mousewheel, Pagination, Navigation], 
        swiperRef: null,
        setSwiperRef,
        slideTo,
      };
    },
    
  }
</script>

<style scoped>
.btnUp {
  cursor: pointer;
  width:2.5rem; 
  height: 2.5rem;
  position: fixed; 
  bottom: 1rem;
  align-items: center;
  justify-content: center; 
  z-index: 999;
  background-color: #6843fe;
  text-decoration: none;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
  text-align: center;
  vertical-align: middle;
  line-height: 2.2rem;
  outline: none;
  right: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.6);
}
.ellipse {
  position: absolute;
  /* top: -21cqmin; */
  left: 7cqmax;
  transform: scale(.535);
  z-index: 0;
}
@media (max-width: 728px){
  .ellipse {
    left: -90px;
    transform: scale(.297);
  }
}
.ell {
  position: relative;
}
.document {
  background-color: #fff;
  border-radius: 1.125rem;
}
.ab {
  font-size: 3cqmin;
  font-weight: 700;
}
.titleNapr {
  color: #FF2323;
  font-size: 3cqmax;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
}
.exp {
  font-size: 1.7cqmax;
  font-weight: 700;
  color: #6843fe;
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
}
.napr-about {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
}
header {
  background: linear-gradient(rgba(17, 15, 44, .6), rgba(17, 15, 44, .8)), url(
    @/assets/background.jpg) center;
  background-size: cover;
  color: white;
}

img.exp {
  border-radius: 20%;
}
</style>
