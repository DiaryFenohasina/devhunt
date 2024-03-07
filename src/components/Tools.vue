<template>
  <section class="section pb-0">
    <div class="container">
      <div class="section-title text-center">
        <h2 class=" text-center ">Services offertes</h2>
        <p class="text-center">dsljfhsdlsfjsdlkfj   </p>
      </div>
      <div class="row ">
        <div v-for="(club,index) in data[Show] " :key="index" class="c-type col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="text-center icon-hover match-height" style="height: 321.4px;">
            <div class="card-body">
              <router-link :to="`/Services/${index}`">
                <i class="card-icon-Tools" :class="club.icon" ></i>
                <h3 class="card-title h4 my-3">{{club.title}}</h3>
                <p class="card-text">{{club.text}}</p>
              </router-link>
              </div>
          </div>
        </div>

        <div class="single-services">
            <span class="lnr lnr-pie-chart"></span>
            <a href="#"><h4>Web Design</h4></a>
            <p>
                “It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”
            </p>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card.vue'
import {Clubs, Etudes, Sports, Autres} from '@/data'

export default {
  data(){
    return{
      data: [Clubs, Etudes, Sports, Autres],
      Show: 0

    }
  },
  components:{
    Card,
  },
  methods:{
    selectClubs(x)
    {
      console.log('clicked')
      this.Show = x
    }
  }
  
}
</script>
<style scoped>
.active{
    color: var(--baseColor);
}
li:hover{
    color: var(--baseColor);
}
.card-icon-Tools {
    border-radius: 12px !important;
}
.card-icon-Tools {
  /* background: #000000; */
  /* color: #000000; */
  height: 55px;
  width: 60px;
  line-height: 55px;
  /* text-align: center; */
  font-size: 27px;
  /* display: block; */
  /* margin-top: 40px; */
  
}
</style>


