<template>
  <div class="home-page">
    <div class="row">
      <div class="col-md-8">
        <FeaturedBeats />
        <PromotedBeats />
        <StaffPicks />
        <LatestReleases :items="latestReleases" />
      </div>
      <div class="col-md-4">
        <TopProducers :producers="topProducers" />
        <TopBeats />
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

export default {
  components: {
    FeaturedBeats,
    PromotedBeats,
    StaffPicks,
    TopProducers,
    LatestReleases,
    TopBeats
  },
  loading: false,
  async asyncData({ $axios }) {
    const latestReleases = {
      endpointUrl:
        'https://api.airbit.com/beats/search?page=1&limit=12&search=&genre=0&moods=0&added=3&tempo=0&order=plays&free_download=0&marketplace=1&expand=user',
      data: []
    }

    const topProducers = {
      endpointUrl:
        'https://api.airbit.com/charts/marketplace_top_earning_producers?period=7&limit=10&page=1',
      data: []
    }

    const latestReleaseData = await $axios.$get(latestReleases.endpointUrl)
    if (latestReleaseData && latestReleaseData.items) {
      latestReleases.data = latestReleaseData.items
    }

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

    return {
      latestReleases: latestReleases.data,
      topProducers: topProducers.data
    }
  }
}
</script>

<style></style>
