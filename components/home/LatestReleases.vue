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
              <div class="avatar-container">
                <div class="overlay"></div>
                <i class="fa fa-play"></i>
                <img
                  v-if="i.artwork && i.artwork.files"
                  :src="
                    i.artwork && i.artwork.files ? i.artwork.files['50'] : ''
                  "
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
              </div>
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
            <div class="actions d-flex mr-2">
              <div class="icons-wrapper">
                <div class="icon">
                  <el-tooltip content="Add to playlist" placement="top">
                    <i class="fa fa-headphones"></i>
                  </el-tooltip>
                </div>
                <div class="icon">
                  <el-tooltip content="Like" placement="top">
                    <div class="like-wrapper">
                      <i class="fa fa-heart"></i>
                      <span class="like-count text-muted font-14">{{
                        i.likes
                      }}</span>
                    </div>
                  </el-tooltip>
                </div>
                <div class="icon">
                  <el-tooltip content="Share" placement="top">
                    <i class="fa fa-share-alt"></i>
                  </el-tooltip>
                </div>
                <div class="icon free-download">
                  <el-tooltip
                    v-if="i.freeDownload"
                    content="Download a FREE version"
                    placement="top"
                  >
                    <i class="fa fa-download"></i>
                  </el-tooltip>
                </div>
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
      page: 1
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
      position: relative;
      &.view-all {
        cursor: auto !important;
        background: transparent;
        padding-top: 25px;
        padding-bottom: 5px;
      }
      .avatar-container {
        height: 40px !important;
        position: relative;
        .overlay {
          position: absolute;
          top: 0;
          width: 40px;
          height: 40px;
          left: 12px;
          background-color: rgba(0, 0, 0, 0.35);
          z-index: 3;
          display: none;
        }
        i.fa-play {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 30px;
          z-index: 5;
          display: none;
        }
        img.avatar {
          width: 40px !important;
          height: 40px !important;
        }
      }
      .user-name-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
      }
      .actions {
        display: flex;
        justify-content: flex-end !important;
        height: 100%;
        align-items: center;
        .icons-wrapper {
          display: flex;
          .icon {
            justify-content: space-between;
            cursor: pointer;
            margin: 0 14px;
            visibility: hidden;
            min-width: 15px;
            &.free-download {
              color: #75b200;
              visibility: visible;
            }
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
          i {
            font-weight: 700;
          }
          &:hover {
            background-color: darken($main-color, 5%);
          }
        }
      }
      &:not(.view-all):hover {
        background: #343035;
        .avatar-container .overlay,
        .avatar-container i.fa-play {
          display: block;
        }
        .icons-wrapper .icon {
          visibility: visible;
        }
      }
    }
  }
}
</style>
