<template>
  <div class="latest-releases-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>LATEST RELEASES</span>
      </div>
      <div v-for="i in items" :key="i.id" class="text item">
        <div class="row">
          <div class="col-md-4">
            <div class="d-flex">
              <img
                v-if="i.artwork && i.artwork.files"
                :src="i.artwork && i.artwork.files ? i.artwork.files['50'] : ''"
                :alt="i.name"
                class="avatar"
              />
              <img
                v-else-if="i.user && i.user.avatar && i.user.avatar.files"
                :src="
                  i.user && i.user.avatar && i.user.avatar.files
                    ? i.user.avatar.files['50']
                    : ''
                "
                :alt="i.name"
                class="avatar"
              />
              <div class="text-truncate">
                <a href="" class="beat-name text-nowrap white-a font-13">
                  {{ i.name }}
                </a>
                <div class="genre text-muted font-13">
                  {{ i.genre ? i.genre.name : '' }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="user-name-wrapper text-truncate">
              <a href="" class="text-muted font-weight-bold font-13">
                {{ i.user ? i.user.name : '' }}
              </a>
            </div>
          </div>
          <div class="col-md-5">
            <div class="actions d-flex justify-content-between mr-2">
              <div class="icons-wrapper">
                <i class="el-icon-service"></i>
                <i class="el-icon-thumb"></i>
                <i class="el-icon-share"></i>
                <i class="el-icon-download"></i>
              </div>
              <div class="price">
                <el-button
                  type="primary"
                  size="mini"
                  icon="el-icon-shopping-cart-2"
                >
                  {{
                    i.pricing && i.pricing.length > 0 ? i.pricing[0].price : 0.0
                  }}
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="items && items.length > 0" class="text item view-all">
        <a href="" class="white-a">
          VIEW ALL
          <i class="el-icon-arrow-right"></i>
        </a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      items: []
    }
  },
  created() {
    this.fetchLatestReleases()
  },
  methods: {
    async fetchLatestReleases() {
      const endpointUrl = `https://api.airbit.com/beats/search?page=${this.page}&limit=12&search=&genre=0&moods=0&added=3&tempo=0&order=plays&free_download=0&marketplace=1&expand=user`
      this.loading = true
      const data = await this.$axios.$get(endpointUrl)
      if (data && data.items) {
        this.items = data.items
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/_variables.scss';
.latest-releases-wrapper {
  .el-card .el-card__body {
    padding: 20px 5px;
    .item {
      transition: all 0.2s ease;
      padding: 7px 0;
      cursor: pointer;
      &:hover {
        background: #343035;
      }
      .user-name-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
      }
      img.avatar {
        width: 40px !important;
        height: 40px !important;
      }
      .actions {
        display: flex;
        justify-content: space-between !important;
        height: 100%;
        align-items: center;
        .icons-wrapper {
          i {
            cursor: pointer;
            margin: 0 5px;
          }
        }
        .price button {
          background-color: $main-color;
          border: none !important;
          transition: all 0.3s ease;
          padding: 5px 8px;
          border-radius: 5px;
          font-size: 11px;
          letter-spacing: 0.5px;
          min-width: 69px;
          margin-left: 15px;
          &:hover {
            background-color: darken($main-color, 5%);
          }
        }
      }
    }
  }
}
</style>
