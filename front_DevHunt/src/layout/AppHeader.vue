<template>
  <header
    class="sticky-top navigation"
    v-scroll="handleScroll"
    v-out_click="clickOutside"
    :class="{ 'nav-bg': isScrolled }"
  >
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand d-1" href="#">Guide ENI</a>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggleNavbar"
          >
            <i class="ti-align-right h4 text-dark"></i>
          </button>
          <div
            class="collapse navbar-collapse text-center"
            :class="{ show: isNavbarOpen }"
            id="navbarScroll"
          >
            <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <router-link to="/"
                  ><span
                    class="nav-link pb-2"
                    :class="getName == 'home' && 'nav-active'"
                    >Guide</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/Services/0"
                  ><span
                    class="nav-link"
                    :class="getName == 'services' && 'nav-active'"
                    >Services</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#2">Link</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#2">Link</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#2">Link</router-link>
              </li>
            </ul>
            <router-link v-if="getName === 'SignIn'" to="/Sign/Up">
              <span class="btn btn-outline-primary mx-lg-4 mb-5 mb-lg-0"
                >Sign Up</span
              >
            </router-link>
            <router-link v-else to="/Sign/Up">
              <span class="btn btn-outline-primary mx-lg-4 mb-5 mb-lg-0"
                >S'Inscrire</span
              >
            </router-link>
            <!-- <button class="btn btn-primary" type="submit">SignIn</button> -->
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isScrolled: false,
      isNavbarOpen: false,
    };
  },
  computed: {
    getName: function () {
      return this.$route.name;
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    clickOutside() {
      this.isNavbarOpen = false;
    },
  },
  directives: {
    scroll: {
      inserted: (el, binding) => {
        window.addEventListener("scroll", binding.value);
      },
      unbind: (el, binding) => {
        window.removeEventListener("scroll", binding.value);
      },
    },
    out_click: {
      bind: (el, binding, vnode) => {
        el.clickOutsideEvent = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: (el) => {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
};
</script>

<style scoped>
.navbar-expand-lg .navbar-nav .nav-link {
  padding: 20px;
  font-size: 20px;
}
.d-1 {
  font-size: 25px;
}
.nav-active {
  color: var(--baseColor);
}
.nav-link:hover {
  color: var(--baseColor);
}
.navbar-toggler:focus {
  box-shadow: none;
}
</style>