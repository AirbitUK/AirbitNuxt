<template>
  <div class="promoted-beats-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>PROMOTED BEATS</span>
      </div>
      <div class="beats-container">
        <div class="row">
          <div v-for="i in items" :key="i.id" class="col-lg-4">
            <div class="beat-container">
              <div v-if="i.free" class="free-download-banner">FREE</div>
              <div class="beat-info top-info text-right bg-mid-grey">
                <span class="top-info-icon pr-2">
                  <a href="">
                    <i class="fa fa-comments pr-1"></i>{{ i.comments }}</a
                  >
                </span>
                <span class="top-info-icon">
                  <a href=""> <i class="fa fa-heart pr-1"></i>{{ i.likes }}</a>
                </span>
              </div>
              <div class="beat-avatar">
                <img
                  :src="i.avatar"
                  :alt="i.beat ? i.beat.name : 'beat name'"
                  class="w-100"
                />
              </div>
              <div class="beat-info bg-mid-grey text-left">
                <div class="details">
                  <div class="beat-name text-truncate">
                    <a href="">{{ i.beat ? i.beat.name : '' }}</a>
                  </div>
                  <div class="user-name text-truncate">
                    <a href="" class="text-muted">{{
                      i.user ? i.user.name : ''
                    }}</a>
                  </div>
                </div>
                <div class="price-details text-center">
                  <a href="">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          likes: 0,
          comments: 1,
          avatar:
            'https://cdn.airbit.com/artwork/903b2511a2efeef74a1dade39d245b48@300x.jpg',
          free: false,
          beat: {
            name: 'Paradise'
          },
          user: {
            name: 'Dopepremier'
          }
        },
        {
          id: 2,
          likes: 6,
          comments: 2,
          avatar:
            'https://cdn.airbit.com/artwork/36382b0f9289fa739ae6da2e85ab2135@300x.jpg',
          free: true,
          beat: {
            name: 'Gateway'
          },
          user: {
            name: '52Beatz'
          }
        },
        {
          id: 3,
          likes: 0,
          comments: 2,
          avatar:
            'https://cdn.airbit.com/artwork/17f849ebd4f889418523f5d325556c63@300x.jpg',
          free: false,
          beat: {
            name: 'Halogen'
          },
          user: {
            name: 'Lance Whitley'
          }
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style></style>
