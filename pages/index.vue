<template>
  <div class="home-page">
    <div class="row">
      <div class="col-md-8">
        <FeaturedBeats />
      </div>
      <div class="col-md-4">
        <TopProducers />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedBeats from '~/components/FeaturedBeats.vue'
import TopProducers from '~/components/TopProducers.vue'

export default {
  components: {
    FeaturedBeats,
    TopProducers
  }
}
</script>

<style></style>
