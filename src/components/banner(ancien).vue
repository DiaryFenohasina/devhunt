
<template>
    <template>
  <section id="hero" class="section landing pb-0">
    <div class="container">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center"
          >
            <div data-aos="zoom-out">
              <h1>Build Your Landing Page With <span>Bootstlander</span></h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div class="text-center text-lg-start">
                <a href="#about" class="btn-get-started scrollto"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <img
              src="../assets/images/hero-img.png"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>

      <svg
        class="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g class="wave1">
          <use
            xlink:href="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255, .1)"
          ></use>
        </g>
        <g class="wave2">
          <use
            xlink:href="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .2)"
          ></use>
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9" fill="#fff"></use>
        </g>
      </svg>

      <!-- End Hero -->
    </div>
  </section>
</template>

<script>
import AOS from '../assets/js/aos/aos.js';
import LandingJs from '../assets/js/jsLanding.js';

export default {
  mounted() {
    // Initialisation des scripts si nécessaire
    // Par exemple:
    AOS.init();
    LandingJs.init();
    // Initialisez d'autres bibliothèques ici si nécessaire
  }
}
</script>

<style src="../assets/js/aos/aos.css">

</style>
<style src="../assets/css/styleLanding.css">

.rounded {
  max-width: 90%;
}

/* @media screen and (min-width:769px) {
    .landing{
      min-height: 820px;
    }
  } */
</style>

</template>