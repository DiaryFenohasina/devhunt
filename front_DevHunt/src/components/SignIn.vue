<template>
  <div class="row">
    <div class="col-lg-2">
    </div>
    <div class="col-lg-8">
      <div class="px-lg-5 px-4">
        <h2 class="mb-4 font-weight-medium">LogIn</h2>
        <div class="content">
          <form class="sign-up" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                :class="isValid['email'] ? 'is-valid' : 'not-valid'"
                id="email"
                required
                placeholder=""
                autocomplete="off"
                v-model="user['email']"
                @input="inputHandler"
                @keyup="inputHandler"
              />
              <label for="email">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" :class="isValid['password'] ? 'is-valid' : 'not-valid'"
                id="password"
                required
                placeholder=""
                autocomplete="off"
                v-model="user['password']"
                @input="inputHandler"
                @keyup="inputHandler"
              />
              <label for="password">Mot de passe </label>
            </div>
            <div class="d-flex align-items-center justify-content-end">
              <router-link to="/Sign/In"><span class="mx-2 mx-sm-3 has-acc">S'inscrire ?</span></router-link>
              <button type="submit" class="btn btn-primary" :disabled="isDisable">
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { backServer } from "@/config/axiosConfig";

export default {
  data() {
    return {
      user: {},
      isValid: { email: false, password: false },
      isDisable: true,
    };
  },
  created() {
    (this.user.email = this.$route.query.email), this.emailHandler();
  },
  methods: {
    login() {
      backServer.post("/api/user/login", this.user)
        .then((res) => {
          if (res.data.message === "connected") {
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("id", res.data.user_ID);
            localStorage.setItem("username", res.data.username);
            this.$router.push(`/Chat`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    inputHandler(e) {
      console.log('exec')
      switch (e.target.id) {
        case "email":
          /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(e.target.value)
            ? (this.isValid["email"] = true)
            : (this.isValid["email"] = false);
          break;
        case "password":
          e.target.value.length >= 6
            ? (this.isValid["password"] = true)
            : (this.isValid["password"] = false);
          break;
      }

      if (this.isValid["email"] && this.isValid["password"]) {
        this.isDisable = false;
      } else {
        this.isDisable = true;
      }
    },
    emailHandler() {
      /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(this.user.email)
        ? (this.isValid["email"] = true)
        : (this.isValid["email"] = false);
    },
  },
};
</script>