<template>
  <div ref="swiper" class="swiper">

    <div class="swiper-wrapper">

      <div class="swiper-slide" v-for="list in lists" :key="list.id">
        <ResturentFood :list="list" />
      </div>
    </div>

    <!-- <div class="swiper-pagination"></div> -->

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ResturentFood from '@/components/ResturentFood.vue'

export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: 'hi',
          tag: 'you'
        },
        {
          id: 2,
          name: 'ii',
          tag: 'you'
        },
        {
          id: 3,
          name: 'uu',
          tag: 'you'
        },
        {
          id: 4,
          name: 'hti',
          tag: 'you'
        },
        {
          id: 5,
          name: 'itti',
          tag: 'you'
        },
        {
          id: 6,
          name: 'uttu',
          tag: 'you'
        },
      ]
    }
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
  height: 300px;
}
</style>
