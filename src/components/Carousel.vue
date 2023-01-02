<template>
  <div ref="swiper" class="swiper">

    <div class="swiper-wrapper">

      <div class="swiper-slide" v-for="list in lists" :key="list.id">
        <ResturentFood :list="list" />
      </div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ResturentFood from '@/components/ResturentFood.vue'
import { mapState } from 'vuex'

export default {

  computed:{
    ...mapState('resturents',{
      lists:'lists'
    })
  },

  components:{
    ResturentFood,
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 3,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
}
</script>


<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:-50px;
  height: 400px;
}
.swiper-button-next{
  font-size: 1rem;
}
</style>
