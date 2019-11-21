<template>
  <div class="the-week-producer-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>PRODUCER OF THE WEEK</span>
      </div>
      <div class="winner-info">
        <div class="winner-avatar">
          <img
            src="https://cdn.airbit.com/avatars/b3bcd20ed98a18dbb1d9585658dbed21@600x.jpg"
            alt="producer name"
          />
        </div>
        <div class="winner-name">
          SUPAMARIOBEATZ
        </div>
      </div>
      <div v-for="p in producers" :key="p.id" class="text item">
        <span class="play-icon">
          <i class="fa fa-play"></i>
        </span>
        <img
          :v-if="p.avatar && p.avatar.files"
          :src="p.avatar && p.avatar.files ? p.avatar.files['50'] : ''"
          :alt="p.name"
          class="avatar"
        />
        <div class="item-info text-truncate">
          <div class="beat-name text-truncate">
            <a href="" class="white-a font-15"
              >Mac Miller Type Beat - 'Netflix and Chill</a
            >
          </div>
          <div class="genre-name text-truncate">
            <a href="" class="white-a text-muted">
              {{ p.name }}
            </a>
          </div>
          <div class="prices text-muted font-13">
            <span>From $15.00</span>
          </div>
        </div>
      </div>
      <div v-if="producers && producers.length > 0" class="text item view-all">
        <a href="">
          VIEW ALL
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      page: 1,
      producers: [],
      allProducers: [],
      allProducersLoaded: false,
      loading: false
    }
  },
  created() {
    this.producers = this.items
    this.allProducers = this.items
  },
  methods: {
    // Fetch a new producers page
    async fetchProducers() {
      if (!this.allProducersLoaded) {
        const endpointUrl = `https://api.airbit.com/charts/marketplace_top_earning_producers?period=7&limit=10&page=${this.page}`
        this.loading = true
        const data = await this.$axios.$get(endpointUrl)
        if (data && data.item && data.item.items) {
          this.loading = false
          if (data.item.items.length !== 0) {
            this.allProducers = [...this.allProducers, ...data.item.items]
            this.renderProducers()
          } else {
            this.allProducersLoaded = true
            // we didn't add any new items, so return to the current page
            this.page -= 1
          }
        }
      }
    },
    nextPage() {
      // Get the next page if it's already loaded before
      if (this.allProducers.length > this.page * 10) {
        this.page += 1
        this.renderProducers()
      }
      // Otherwise send a request to fetch the new page
      else if (!this.allProducersLoaded) {
        this.page += 1
        this.fetchProducers()
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page -= 1
        this.renderProducers()
      }
    },
    renderProducers() {
      // Display only the current page producers
      if (this.allProducers && this.allProducers.length > 0) {
        const start = (this.page - 1) * 10
        this.producers = this.allProducers.slice(start, start + 10)
      }
    }
  }
}
</script>

<style lang="scss">
.the-week-producer-wrapper {
  .el-card__body {
    .winner-info {
      margin: -20px -15px 0;
      .winner-avatar {
        img {
          max-height: 350px;
          width: 100%;
        }
      }
      .winner-name {
        padding: 15px;
        border-bottom: 1px solid #353036;
      }
    }
    .item {
      padding: 15px 5px;
      .play-icon {
        width: 25px;
        i {
          font-size: 14px;
        }
      }
      img.avatar {
        border-radius: 3px;
        margin: 0 10px;
      }
      .item-info {
        .genre-name {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
