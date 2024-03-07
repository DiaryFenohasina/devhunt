<template>
  <section class="section landing pb-0">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-7 text-left">
          <h1 class="mb-4">Bienvenue dans ENI guide</h1>
          <p class="mb-5">
            Connectez-vous pour explorer un monde de fonctionnalités
            personnalisées et de services adaptés à vos besoins.
          </p>

          <form class="search-wrapper d-sm-flex" action="search.html">
            <input
              id="search-by"
              name="s"
              type="email"
              class="form-control form-control-lg"
              placeholder="votre_adresse@gmail.com"
            />
            <input
              id="search-by"
              name="s"
              type="password"
              class="form-control form-control-lg"
              placeholder="*************"
            />
            <button type="submit" class="btn btn-primary">Connexion</button>
          </form>
        </div>
        <div class="col-lg-4 d-lg-block d-none">
          <img
            src="../assets/images/hero-img.png"
            alt="illustration"
            class="img-fluid rounded animated"
            style="max-width: 90%"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>
<style scoped>
.rounded {
  max-width: 90%;
}
.animated {
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation: example 2s linear 0.1s infinite alternate;
}
@keyframes example {
  from {
    top: -30px;
  }
  to {
    top: 0px;
  }
}
/* @media screen and (min-width:769px) {
    .landing{
      min-height: 820px;
    }
  } */
</style>