<template>
  <div class="wrap">
    <div class="projects__box">
      <ReviewsComp
        v-for="(review, index) in reviews"
        :key="index"
        :review="review"
      />
    </div>
  </div>
</template>
<script>
import ReviewsComp from '../components/ReviewsComp.vue'
import { mapState } from 'vuex'

export default {
  components: { ReviewsComp },

  computed: {
    ...mapState({
      reviews: (state) => state.reviews.slice(0, 6),
    }),
  },
}
</script>
