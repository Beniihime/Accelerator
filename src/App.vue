<template>
  <header>
    <img src="@/assets/background.jpg" class="bck">
    <div class="title">
      <span class="firstLine">Акселератор</span> <br />
      <span class="secondLine">-0+500.Сибирь</span>
    </div>
    <div class="slogan">
      СЛОГАН
    </div>
    <div class="row napr">
      <div class="col">
        Автонет
      </div>
      <div class="col">
        Технет
      </div>
      <div class="col">
        Нейронет
      </div>
      
    </div>
  </header>
</template>

<style scoped>
.title {
  position: absolute;
  top: 253px;
  font-size: 130px;
  line-height: 11rem;
  color: white;
  font-weight: 700;
}
.title .secondLine {
  position: absolute;
  color: rgb(255, 35, 35);
  left: 78px;
}
.title .firstLine {
  position: absolute;
  left: 82px;
}
.slogan {
  position: absolute;
  top: 625px;
  left: 82px;
  font-size: 85px;
  font-weight: 700;
  color: white;
  line-height: 3rem;
}
.napr {
  position: absolute;
  top: 754px;
  left: 82px;
  font-family: 'DM Sans', sans-serif ;
  font-size: 64px;
  font-weight: 700;
  color: white;
}
.bck {
  width: 100%;
  height: 100%;
  opacity: .4;
  object-fit: cover;
}

header {
  background-color: rgba(17, 22, 52);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>
