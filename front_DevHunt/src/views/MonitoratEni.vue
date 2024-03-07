<template>
  <div class="section pb-0">
    <div class="container">
      <div class="image d-flex col-md-12 col-xs-12 col-sm-12 col-xl-12">
        <div class="col-md-4"></div>
        <img src="../assets/images/jeune1.jpeg" alt="" class="image mb-5" />
      </div>
      <h2 class="section-title mt-4">Les Mentors</h2>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-2 col-xl-4 mb-5">
          <div class="card match-height" style="height: 321.4px">
            <div class="card-body">
              <div class="d-flex gap-5">
                <img src="../assets/images/card.png" class="avatar" alt="" />
                <div class="text">
                  <p class="card-text mt-1">Dev ReactJs</p>
                  <p class="card-text mt-1">Dev ReactJs</p>
                  <p class="card-text mt-1 mb-2">Dev ReactJs</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="red"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </div>
              </div>
              <div class="d-flex gap-5 mt-3">
                <div class="text col-lg-7">
                  <p class="card-title h8">Diary Fenohasina L2 GB</p>
                  <p class="card-text mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </div>
                <div class="contact mt-5 m-auto">
                  <i class="card-icon mb-4 ti-comments"></i>
                </div>
              </div>
              <slot />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8 col-xs-2 col-xl-4 mb-5">
          <div class="card match-height" style="height: 321.4px">
            <div class="card-body">
              <div class="d-flex gap-5">
                <img src="../assets/images/card.png" class="avatar" alt="" />
                <div class="text">
                  <p class="card-text mt-1">Dev ReactJs</p>
                  <p class="card-text mt-1">Dev ReactJs</p>
                  <p class="card-text mt-1 mb-2">Dev ReactJs</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="red"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                    />
                  </svg>
                </div>
              </div>
              <div class="d-flex gap-5 mt-3">
                <div class="text col-lg-7">
                  <p class="card-title h8">Diary Fenohasina L2 GB</p>
                  <p class="card-text mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </p>
                </div>
                <div class="contact mt-5 m-auto">
                  <i class="card-icon mb-4 ti-comments"></i>
                </div>
              </div>
              <slot />
            </div>
          </div>
        </div>
      </div>
      <ListMentor></ListMentor>
    </div>
  </div>
</template>


<script>
import ListMentor from "@/components/ListMentor.vue";

export default {
  data() {
    return {};
  },
  components: {
    ListMentor,
  },
};
</script>

<style scoped>
.avatar {
  border-radius: 5%;
  height: 140px;
  object-fit: cover;
  vertical-align: middle;
}
.contact {
  border-radius: 5%;
  height: 70px;
  object-fit: cover;
  vertical-align: middle;
}
</style>