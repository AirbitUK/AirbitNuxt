<template>
  <div class="the-week-producer-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>PRODUCER OF THE WEEK</span>
      </div>
      <div class="winner-info">
        <div class="winner-avatar">
          <img src="https://via.placeholder.com/150" alt="producer name" />
        </div>
        <div class="winner-name">
          SUPAMARIOBEATZ
        </div>
      </div>
      <div
        v-for="p in producers"
        :key="p.id"
        :class="[
          p.viewLicenses ? 'beat-row-open' : 'beat-row-closed',
          p.isShipped ? 'selected' : ''
        ]"
        class="beat-row"
      >
        <div class="text item">
          <span class="play-icon">
            <i class="fa fa-play"></i>
          </span>
          <img
            :v-if="p.avatar && p.avatar.files"
            :src="p.avatar && p.avatar.files ? p.avatar.files['50'] : ''"
            :alt="p.name"
            class="avatar"
          />
          <div class="item-info">
            <div class="beat-name pr-3">
              <a href="" class="white-a font-13"
                >Mac Miller Type Beat - 'Netflix and Chill</a
              >
            </div>
            <div class="genre-name font-11">
              <a href="" class="white-a text-muted">
                {{ p.name }}
              </a>
            </div>
            <div class="prices text-muted font-13">
              <span>From $15.00</span>
            </div>
          </div>
          <div @click="p.viewLicenses = !p.viewLicenses" class="show-price-btn">
            <el-button type="default" size="small">
              <i v-if="p.isShipped" class="fa fa-shopping-cart"></i>
              <i v-else class="fa fa-plus"></i>
            </el-button>
          </div>
        </div>
        <div
          @click="p.isShipped = !p.isShipped"
          class="row-license-drawer text-center"
        >
          <div class="row-licenses-wrapper">
            <div class="row-license-wrapper">
              <button class="license btn">
                <div class="license-price">
                  $20.00
                </div>
                <div class="license-name font-11">
                  Exclusive
                </div>
                <div class="files-available text-muted font-12">
                  <span>MP3</span>
                  <span>, WAV</span>
                  <span>, Trackout</span>
                </div>
              </button>
            </div>
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
      producers: [],
      loading: false
    }
  },
  created() {
    this.producers = this.items
    this.producers.forEach((element) => {
      element.viewLicenses = false
      element.isShipped = false
    })
  }
}
</script>

<style lang="scss">
@import '~assets/css/_variables.scss';
.the-week-producer-wrapper {
  .el-card__body {
    .winner-info {
      margin: -20px -15px 0;
      @media (max-width: 380px), (max-width: 915px) and (min-width: 768px) {
        margin: -20px -7px 0;
      }
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
    .beat-row {
      .item {
        padding: 15px 5px;
        .play-icon {
          width: 27px;
          cursor: pointer;
          i {
            font-size: 14px;
          }
        }
        img.avatar {
          border-radius: 3px;
          margin: 0 10px;
          box-sizing: content-box;
        }
        .item-info {
          .beat-name {
            line-height: 1.5;
          }
          .genre-name {
            color: #777;
          }
        }
        .show-price-btn {
          margin-left: auto;
          button {
            background-color: $main-color !important;
            border-color: $main-color !important;
            color: #fff;
            width: 35px;
            height: 35px;
            text-align: center;
            padding: 0;
            border-radius: 5px;
            i {
              font-size: 14px;
            }
            &:focus {
              outline: none;
            }
          }
        }
      }
      .row-license-drawer .row-license-wrapper {
        max-height: 0;
        opacity: 0;
        transition: all 0.3s;
        padding: 1rem 0 !important;
        overflow: hidden;
        button.license {
          border: 1px solid $main-color;
          color: #fff;
          border-radius: 5px;
          width: 100%;
          outline: none !important;
          box-shadow: none !important;
        }
      }
      &.beat-row-closed {
        .row-license-wrapper {
          padding: 0 !important;
        }
      }
      &.beat-row-open {
        .item {
          border-bottom: none;
        }
        .row-license-drawer .row-license-wrapper {
          max-height: 400px;
          opacity: 1;
        }
      }
      &.selected {
        .row-license-wrapper button.license {
          background-color: $main-color;
        }
        .show-price-btn button {
          background-color: transparent !important;
          i {
            color: $main-color !important;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
