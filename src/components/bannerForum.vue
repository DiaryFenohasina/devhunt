<template>
  <section class="section landing pb-0">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-4 d-lg-block d-none">
          <img
            src="../assets/images/eni.png"
            alt="illustration"
            class="img-fluid rounded"
            style="max-width: 90%"
          />
        </div>
        <div class="col-lg-7 text-left">
          <h1 class="mb-4">Partage d'expérience de vie à l'aide d'un Forum.</h1>
          <p class="mb-5">
            Découvrez un espace d'échange vibrant où vos idées prennent vie et
            où les étudiants se rassemblent pour partager passions, connaissances et
            expériences.
          </p>
          <button
            @click="showForumModal = true"
            type="submit"
            class="btn btn-primary"
          >
            Poser une question
          </button>
        </div>
      </div>
      <div>
        <!-- Modal Structure -->
        <div
          v-if="showForumModal"
          class="modal fade show d-block"
          tabindex="-1"
          style="display: block"
          aria-modal="true"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Poser votre Question</h5>
                <button
                  type="button"
                  class="btn-close"
                  @click="showForumModal = false"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Ceci est un exemple de contenu scrollable dans un modal. Vous
                  pouvez mettre beaucoup de contenu ici pour voir l'effet de
                  défilement.
                </p>
                <p>Paragraphe répété pour démonstration :</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="showForumModal = false"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Backdrop -->
        <div v-if="showForumModal" class="modal-backdrop fade show"></div>
      </div>
    </div>
  </section>
</template>
  <script>
export default {
  data() {
    return {
      showForumModal: false,
    };
  },
};
</script>