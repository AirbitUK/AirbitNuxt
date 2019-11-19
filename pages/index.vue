<template>
  <div class="home-page">
    <div class="row">
      <div class="col-md-8">
        <FeaturedBeats />
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>PROMOTED BEATS</span>
            </div>
          </el-card>
        </div>
        <LatestReleases />
      </div>
      <div class="col-md-4">
        <TopProducers />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedBeats from '~/components/home/FeaturedBeats.vue'
import TopProducers from '~/components/home/TopProducers.vue'
import LatestReleases from '~/components/home/LatestReleases.vue'

export default {
  components: {
    FeaturedBeats,
    TopProducers,
    LatestReleases
  },
  loading: false
}
</script>

<style></style>
