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
            où les élèves se rassemble pour partager passions, connaissances et
            experiences.
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
                <input type="text" class="form-control" placeholder="Poser votre question" v-model="question['content']">
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="showForumModal = false"
                >
                  Envoyer
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
import {backServer} from "@/config/axiosConfig";
export default {
  
  data() {
    return {
      showForumModal: false,
      question: {},
      response: {}
    };
  },
  methods: {
    async askQuestion(){
      try {
        const response = await backServer.post('posts',question) 
        this.takeResponse()
      } catch (error) {
        console.log(error)
      }
    },
    async takeResponse(){
      try {
        const response = await backServer.get('posts') 
        this.response = [...response.data]
      } catch (error) {
        console.log(error)
      }
    }
  }

};
</script>