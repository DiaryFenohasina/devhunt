<template>
  <section class="pt-5">
    <div class="container shadow section-sm rounded">
      <div class="row">
        <div class="col-lg-3">
          <ul class="sidenav" v-for="(data, id) in Clubs" :key="id">
            <li class="sidelist c-type" @click="changeIndex(id)">
              <span :class="id == index && 'isActive'">{{ data.title }}</span>
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <div class="px-lg-5 px-4">
            <h2 class="mb-4 font-weight-medium">
              {{ Clubs[index].title }}
            </h2>
            <div class="content">
              <div class="row">
                <div
                  class="card__inner"
                  v-for="item in list"
                  :key="item"
                  @click="toggle1(item)"
                  ref="inner"
                >
                  <div class="card__face card__face--front">
                    <div class="tojo">
                      <img
                        :src="Clubs[index].image"
                        width="500px"
                        alt="image"
                      />
                      <div class="fita"><p>zryreyeqrquuer</p></div>
                    </div>
                  </div>
                  <div class="card__face card__face--back">
                    <div class="card__content">
                      <div class="card__header">
                        <h2>Biographie</h2>
                      </div>
                      <div class="card__body">
                        <h3>JavaScript Wizard</h3>
                        <p>
                          Lorem ipsum <strong>dolor</strong> sit amet,
                          consectetur <strong>adipiscing</strong> elit. Sed id
                          erat a magna lobortis dictum. Nunc est arcu,
                          <strong>lacinia</strong> quis sapien placerat,
                          <strong>laoreet</strong> tincidunt nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>
<script>
import { Clubs } from "@/data";
// this.$route.params.id
export default {
  data() {
    return {
      Clubs,
      index: this.$route.params.id,
      list: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    changeIndex(ind) {
      this.index = ind;
    },
    toggle1(id) {
      this.$refs.inner[id - 1].classList.toggle("is_flipped");
    },
  },
};
</script>
<style scoped>
span {
  padding: 20px 0;
  color: #222;
  display: block;
  font-size: 18px;
  font-weight: 500;
}
span:hover {
  color: var(--baseColor) !important;
  position: relative;
  margin-left: 10px;
}
.isActive {
  color: var(--baseColor) !important;
  position: relative;
  margin-left: 10px;
}
.isActive::before {
  position: absolute;
  content: "";
  left: -10px;
  top: 25%;
  height: 50%;
  width: 1px;
  background: var(--baseColor);
}
/*rsytududµ*/

.tojo {
  position: relative;
}
.fita {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card__inner {
  font-family: montserrat, sans-serif;
  width: 300px;
  height: 500px;
  perspective: 1000px;
  transition: transform 1s;
  transform-style: preserve-3d;
  margin-left: 11%;
  margin-top: 2%;
  margin-bottom: 2%;
  position: relative;
}

.card__inner.is_flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
}

.card__face--front {
  background-image: linear-gradient(to bottom right, #00d362, #ffff);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__face--front h2 {
  color: #fff;
  font-size: 32px;
}

.card__face--back {
  background-color: #f3f3f3;
  transform: rotateY(180deg);
}

.card__content {
  width: 100%;
  height: 100%;
}

.card__header {
  position: relative;
  padding: 30px 30px 40px;
}

.card__header:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom left, #00d362 10%, #ffff 115%);
  z-index: -1;
  border-radius: 0px 0px 50% 0px;
}

.pp {
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 5px solid #fff;
  object-fit: cover;
}

.card__header h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.card__body {
  padding: 30px;
}

.card__body h3 {
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

.card__body p {
  color: #212121;
  font-size: 18px;
  line-height: 1.4;
}
</style>

