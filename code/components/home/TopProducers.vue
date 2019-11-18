<template>
  <div class="top-producers-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>TOP PRODUCERS</span>
        <div class="pagination">
          <span class="loading-indicator"
            v-loading="loading"          
            element-loading-spinner="el-icon-loading">
          </span>
          <el-button type="text" @click="previousPage()">
            <i class="el-icon-caret-left"></i>
          </el-button>
          <el-button type="text" @click="nextPage()">
            <i class="el-icon-caret-right"></i>
          </el-button>
        </div>
      </div>
      <div v-for="p in producers" :key="p.id" class="text item">
        <span class="position">{{ p.position }}</span>
        <img
          :v-if="p.avatar && p.avatar.files"
          :src="p.avatar && p.avatar.files ? p.avatar.files['50'] : ''"
          :alt="p.name"
          class="avatar"
        />
        <span class="producer-name">{{ p.name }}</span>
      </div>
      <div v-if="producers && producers.length > 0" class="text item view-all text-right">
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
      producers:[], 
      allProducers:[],
      allProducersLoaded:false,
      loading:false
    }
  },
  created() {
    this.fetchProducers();
  },
  methods:{
    // Fetch a new producers page
    async fetchProducers(){
      if(!this.allProducersLoaded){
        const endpointUrl =
          `https://api.airbit.com/charts/marketplace_top_earning_producers?period=7&limit=10&page=${this.page}`
        this.loading = true;
        const data = await this.$axios.$get(endpointUrl)
        if (data && data.item && data.item.items) {
          this.loading = false;
          if(data.item.items.length != 0){
            this.allProducers = [...this.allProducers, ...data.item.items]      
            this.renderProducers();
          }
          else{
            this.allProducersLoaded = true;
            // we didn't add any new items, so return to the current page
            this.page -= 1;
          }
        }
      }
    },
    nextPage(){
      // Get the next page if it's already loaded before
      if(this.allProducers.length > this.page * 10){
        this.page += 1;
        this.renderProducers();
      }
      // Otherwise send a request to fetch the new page
      else{
        if(!this.allProducersLoaded){
            this.page += 1;
            this.fetchProducers();
        }
      }
    },
    previousPage(){
      if(this.page > 1){
        this.page -= 1;
        this.renderProducers();
      }
    },
    renderProducers(){
      // Display only the current page producers 
      if(this.allProducers && this.allProducers.length > 0){
        let start = (this.page - 1) * 10;
        this.producers = this.allProducers.slice(start,start+10)
      }  
    }
  }
}
</script>

<style>

</style>
