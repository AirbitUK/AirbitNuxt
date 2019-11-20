<template>
  <div class="staff-picks-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="first-heading">STAFF</div>
        <div class="second-heading">PICKS</div>
      </div>
      <div class="beats-container">
        <div class="row">
          <div v-for="i in items" :key="i.id" class="col-lg-3">
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
          likes: 1,
          comments: 0,
          avatar:
            'https://cdn.airbit.com/avatars/2aea0cbe3c5f3253318b99da77e7e765@300x.jpg',
          free: false,
          beat: {
            name: 'Blinded'
          },
          user: {
            name: 'Silasbeats'
          }
        },
        {
          id: 2,
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
          id: 3,
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
          id: 4,
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

<style lang="scss">
@import '~assets/css/_variables.scss';
.staff-picks-wrapper {
  .el-card__header {
    background: transparent !important;
    border-bottom: 1px solid #3b3d40;
    .first-heading {
      color: $main-color;
      font-weight: 300;
      font-size: 28px;
    }
    .second-heading {
      font-size: 40px;
    }
  }
}
</style>
