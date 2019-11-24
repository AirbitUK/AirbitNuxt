<template>
  <div class="latest-releases-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>LATEST RELEASES</span>
      </div>
      <div v-for="i in items" :key="i.id" class="text item">
        <div class="row">
          <div class="col-lg-4 col-md-3 col-sm-6 col-5">
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
                <!-- mobile only -->
                <div class="user-name text-truncate d-flex d-md-none">
                  <a
                    href=""
                    class="text-muted font-weight-bold font-13 text-truncate"
                  >
                    {{ i.user ? i.user.name : '' }}
                  </a>
                </div>
                <div class="genre text-muted font-13">
                  {{ i.genre ? i.genre.name : '' }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-2 d-none d-md-block">
            <div class="user-name-wrapper text-truncate">
              <a
                href=""
                class="text-muted font-weight-bold font-13 text-truncate"
              >
                {{ i.user ? i.user.name : '' }}
              </a>
            </div>
          </div>
          <div class="col-lg-5 col-md-7 col-sm-6 col-7">
            <div class="actions d-flex mr-2">
              <div class="icons-wrapper">
                <div class="icon d-none d-md-block">
                  <el-tooltip content="Add to playlist" placement="top">
                    <i class="fa fa-headphones"></i>
                  </el-tooltip>
                </div>
                <div class="icon d-none d-md-block">
                  <el-tooltip content="Like" placement="top">
                    <div class="like-wrapper">
                      <i class="fa fa-heart"></i>
                      <span class="like-count text-muted font-14">{{
                        i.likes
                      }}</span>
                    </div>
                  </el-tooltip>
                </div>
                <div class="icon d-none d-md-block">
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
                <!-- mobile only -->
                <div class="mobile-menu d-inline-flex d-md-none">
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      <i class="fa fa-ellipsis-h"></i>
                    </span>
                    <el-dropdown-menu
                      slot="dropdown"
                      class="mobile-menu-dropdown"
                    >
                      <el-dropdown-item>
                        <el-tooltip content="Add to playlist" placement="top">
                          <i class="fa fa-headphones"></i>
                        </el-tooltip>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <el-tooltip content="Like" placement="top">
                          <div class="like-wrapper">
                            <i class="fa fa-heart"></i>
                            <span class="like-count text-muted font-14">{{
                              i.likes
                            }}</span>
                          </div>
                        </el-tooltip>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <el-tooltip content="Share" placement="top">
                          <i class="fa fa-share-alt"></i>
                        </el-tooltip>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
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
      & > .row > [class*='col'] {
        @media (max-width: 768px) {
          padding-right: 5px;
          padding-left: 5px;
        }
      }
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
            @media (max-width: 768px) {
              margin: 0;
            }
            @media (max-width: 1200px) {
              min-width: 28px;
              font-size: 14px;
              .like-count {
                font-size: 13px !important;
              }
            }
            &.free-download {
              color: #75b200;
              visibility: visible;
            }
          }
        }
        .price {
          button {
            background-color: $main-color;
            border: none !important;
            transition: all 0.3s ease;
            padding: 5px 8px;
            border-radius: 5px;
            font-size: 11px;
            letter-spacing: 0.5px;
            min-width: 69px;
            margin-left: 15px;
            @media (max-width: 768px) {
              margin-left: 0;
            }
            i {
              font-weight: 700;
            }
            &:hover {
              background-color: darken($main-color, 5%);
            }
          }
          .mobile-menu {
            margin: 0 10px;
            i {
              color: #fff !important;
            }
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
