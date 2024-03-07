<template>
    
    <div id="app">
    
        <Header/>
          <transition name="fade" mode="out-in" appear>
            <router-view/>
          </transition>
        <Footer/>
    </div>
</template>
<script>
import Header from '@/layout/AppHeader.vue'
import Footer from '@/layout/AppFooter.vue'

export default {
  name: 'SampleComponent',
  components:{
    Header,
    Footer,
  }
};
</script>
