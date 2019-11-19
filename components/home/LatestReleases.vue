<template>
  <div class="latest-releases-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>LATEST RELEASES</span>
      </div>
      <div v-for="i in items" :key="i.id" class="text item">
        <div class="row">
          <div class="col-md-4">
            <img
              v-if="i.artwork && i.artwork.files"
              :src="i.artwork && i.artwork.files ? i.artwork.files['50'] : ''"
              :alt="i.name"
              class="avatar"
            />
            <img
              v-else-if="i.user && i.user.avatar && i.user.avatar.files"
              :src="i.user && i.user.avatar && i.user.avatar.files ? i.user.avatar.files['50'] : ''"
              :alt="i.name"
              class="avatar"
            />
            <span class="beat-name">
              {{ i.name }}
            </span>
          </div>
          <div class="col-md-2">

          </div>
          <div class="col-md-6">

          </div>
        </div>
      </div>
      <div v-if="items && items.length > 0" class="text item view-all text-right">
        <a href="">
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
      page:1,     
      items:[]
    }
  },
  created() {
    this.fetchLatestReleases();
  },
  methods:{    
    async fetchLatestReleases(){
        const endpointUrl =
          `https://api.airbit.com/beats/search?page=${this.page}&limit=12&search=&genre=0&moods=0&added=3&tempo=0&order=plays&free_download=0&marketplace=1&expand=user`
        this.loading = true;
        const data = await this.$axios.$get(endpointUrl)
        if (data && data.items) {
          this.items = data.items
        }
    }
  }
}
</script>

<style lang="scss">
.latest-releases-wrapper {
  .el-card .el-card__body{
    img.avatar{width:40px !important}
    .beat-name{font-size: 13px;}
  }
}
</style>
