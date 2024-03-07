<template>
  <section class="section pb-0">
    <div class="container">
      <div class="section-title text-center">
        <h2 class=" text-center ">Association et Clubs</h2>
        <p class="text-center">Rejoignez notre famille engagée au sein de l'ENI pour partager des passions communes et créer des liens durables</p>
      </div>
      <div class="row">
        <div v-for="(club,index) in Clubs " :key="index" class="c-type col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card match-height" style="height: 321.4px;">
            <div class="card-body">
              <router-link :to="`/Services/${index}`">
                <i class="card-icon mb-4" :class="club.icon" ></i>
                <h3 class="card-title h4">{{club.title}}</h3>
                <p class="card-text">{{club.text}}</p>
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
import {Clubs} from '@/data'

export default {
  data(){
    return{
      Clubs

    }
  },
  components:{
    Card,
  },
  methods:{
    
  }
  
}
</script>
<style scoped>
  .active{
    color: #00d362;
  }
  li:hover{
    color: #00d362;
  }
</style>


