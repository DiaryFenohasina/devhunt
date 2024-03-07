<template>
  <section class="section pb-0">
    <div class="container">
      <div class="section-title text-center">
        <h2 class=" text-center ">Services offertes</h2>
        <p class="text-center">Entrez dans un monde de solutions sur mesure, où nos services dépassent les attentes pour vous offrir l'excellence.</p>
      </div>
      <div class="row ">
        <div v-for="(acces,index) in Offers " :key="index" class="c-type col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="text-center icon-hover match-height" style="height: 321.4px;">
            <div class="card-body">
              <router-link :to="`/Services/${index}`">
                <i class="card-icon-Tools" :class="acces.icon" ></i>
                <h3 class="card-title h4 my-3">{{acces.title}}</h3>
                <p class="card-text">{{acces.text}}</p>
              </router-link>
              </div>
          </div>
        </div>

      </div>
    </div>
    
  </section>
</template>
<script>
import Card from '@/components/Card.vue'
import {Clubs, Etudes, Sports, Autres, Offers} from '@/data'

export default {
  data(){
    return{
      Offers,
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


