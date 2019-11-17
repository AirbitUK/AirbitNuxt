<template>
  <div class="top-producers-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>TOP PRODUCERS</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          <i class="el-icon-caret-right"></i>
        </el-button>
        <el-button style="float: right; padding: 3px 0" type="text">
          <i class="el-icon-caret-left"></i>
        </el-button>
      </div>
      <div v-for="p in producers" :key="p.id" class="text item">
        <span class="producer-position">{{ p.position }}</span>
        <img
          :v-if="p.avatar && p.avatar.files"
          :src="p.avatar.files['50']"
          :alt="p.name"
          class="avatar"
        />
        <span class="producer-name">{{ p.name }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producers: []
    }
  },
  async created() {
    const endpointUrl =
      'https://api.airbit.com/charts/marketplace_top_earning_producers?period=7&limit=10&page=1'
    const data = await this.$axios.$get(endpointUrl)
    if (data && data.item && data.item.items) {
      this.producers = data.item.items
      console.log(`producers`, this.producers)
    }
  }
}
</script>

<style>
.top-producers-wrapper .el-card {
  background: #29252a !important;
  margin-bottom: 25px;
  border-radius: 5px;
  border: none;
  color: #fff;
}
</style>
