<template>
  <div class="home-page">
    <div class="row">
      <div class="col-md-8">
        <FeaturedBeats />
        <PromotedBeats />
        <JoinUs />
        <StaffPicks />
        <LatestReleases :items="latestReleases" />
      </div>
      <div class="col-md-4">
        <TopProducers :items="topProducers" />
        <TopBeats :items="topProducers" />
        <TheWeekProducer :items="topProducers" />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedBeats from '~/components/home/FeaturedBeats.vue'
import PromotedBeats from '~/components/home/PromotedBeats.vue'
import StaffPicks from '~/components/home/StaffPicks.vue'
import TopProducers from '~/components/home/TopProducers.vue'
import LatestReleases from '~/components/home/LatestReleases.vue'
import TopBeats from '~/components/home/TopBeats.vue'
import TheWeekProducer from '~/components/home/TheWeekProducer.vue'
import JoinUs from '~/components/home/JoinUs.vue'

export default {
  components: {
    FeaturedBeats,
    PromotedBeats,
    StaffPicks,
    TopProducers,
    LatestReleases,
    TopBeats,
    TheWeekProducer,
    JoinUs
  },
  loading: false,
  async asyncData({ $axios }) {
    console.log(`axios`,$axios)
    console.log(`API_URL`,process.env.API_URL)
    const latestReleases = {
      endpointUrl:
        '/beats/search?page=1&limit=12&search=&genre=0&moods=0&added=3&tempo=0&order=plays&free_download=0&marketplace=1&expand=user',
      data: []
    }

    const topProducers = {
      endpointUrl:
        '/charts/marketplace_top_earning_producers?period=7&limit=10&page=1',
      data: []
    }

    try {
      const latestReleaseData = await $axios.$get(latestReleases.endpointUrl)
      if (latestReleaseData && latestReleaseData.items) {
        latestReleases.data = latestReleaseData.items
      }
    } catch (e) {}

    try {
      const topProducersData = await $axios.$get(topProducers.endpointUrl)
      if (
        topProducersData &&
        topProducersData.item &&
        topProducersData.item.items
      ) {
        if (topProducersData.item.items.length !== 0) {
          topProducers.data = topProducersData.item.items
        }
      }
    } catch (e) {}

    return {
      latestReleases: latestReleases.data,
      topProducers: topProducers.data
    }
  }
}
</script>

<style lang="scss">
.home-page > .row > [class*='col'] {
  @media (min-width: 768px) {
    padding-right: 8px;
    padding-left: 8px;
  }
}
</style>
