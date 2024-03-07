<template>
   <div>
      <Banner/>
      <About/>
      <Offers/>
      <Clubs/>
   </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import About from '@/components/about.vue'
import Offers from '@/components/Offers.vue'
import Clubs from '@/components/Clubs.vue'


export default {
  name: 'SampleComponent',
  components:{
    Banner,
    About,
    Offers,
    Clubs
  }
};
</script>