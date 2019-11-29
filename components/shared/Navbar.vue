<template>
  <div class="navbar-wrapper">
    <b-navbar toggleable="lg" type="dark">
      <div class="container">
        <b-navbar-brand href="#">
          <img
            src="/airbit-white.svg"
            alt="airbit"
            class="logo d-md-inline-block d-none"
          />
          <img
            src="/emblem-white.svg"
            alt="airbit"
            class="mobile-logo d-inline-block d-md-none"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
          <i class="fa fa-bars"></i>
        </b-navbar-toggle>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mobile-nav-right ml-auto d-flex d-lg-none">
          <b-nav-item href="#" class="cart-toggle">
            <i class="fa fa-shopping-cart"></i>
          </b-nav-item>
          <b-nav-item-dropdown right class="guest-menu">
            <template v-slot:button-content>
              <i class="fa fa-user-circle-o"></i>
            </template>
            <b-dropdown-item href="#">
              <i class="icon-login"></i>
              Login
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="icon-speedometer"></i>
              Dashboard
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="icon-basket"></i>
              My Purchases
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#home" class="home">
              <i class="home-icon icon-home"></i>
              <span class="d-inline-block d-lg-none">Home</span>
            </b-nav-item>
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#1e191f"
              text-color="#fff"
            >
              <el-submenu popper-class="beats-popup" index="2">
                <template slot="title">
                  <i class="icon-music-tone smaller"></i>
                  Beats
                </template>
                <div class="browse-menu">
                  <div class="menu-col">
                    <li>
                      <a href="https://airbit.com/browse">
                        <i class="icon-magnifier"></i>
                        Browse Beats
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        <i class="icon-trophy"></i>
                        Top Selling Beats
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        <i class="icon-clock"></i>
                        Recently Added Beats
                      </a>
                    </li>
                    <div
                      class="browse-menu-mobile-chart-links d-block d-lg-none my-3"
                    >
                      <div class="browse-menu-title">
                        CHARTS
                      </div>
                      <li>
                        <a href="https://airbit.com/browse">
                          Top Selling Beats
                        </a>
                      </li>
                      <li>
                        <a href="https://airbit.com/browse">
                          Top Selling Producers
                        </a>
                      </li>
                      <li>
                        <a href="https://airbit.com/browse">
                          Top Newcomers
                        </a>
                      </li>
                    </div>
                  </div>
                  <div class="menu-col">
                    <div class="browse-menu-title">
                      Genres
                    </div>
                    <li>
                      <a href="https://airbit.com/browse">
                        Hip Hop
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Trap
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Dancehall
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        R&B
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Hip Hop
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Trap
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Dancehall
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        R&B
                      </a>
                    </li>
                  </div>
                  <div class="menu-col">
                    <div class="browse-menu-title">
                      Type Beats
                    </div>
                    <li>
                      <a href="https://airbit.com/browse">
                        Drake
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Zytoven
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Trap
                      </a>
                    </li>
                  </div>
                  <div class="menu-col d-lg-block d-none">
                    <div class="browse-menu-title">
                      CHARTS
                    </div>
                    <li>
                      <a href="https://airbit.com/browse">
                        Top Selling Beats
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Top Selling Producers
                      </a>
                    </li>
                    <li>
                      <a href="https://airbit.com/browse">
                        Top Newcomers
                      </a>
                    </li>
                  </div>
                </div>
              </el-submenu>
            </el-menu>
            <b-nav-item href="#">
              <i class="icon-trophy smaller"></i>
              Top Charts
            </b-nav-item>
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#1e191f"
              text-color="#fff"
            >
              <el-submenu index="2" popper-class="sell-beats-popup">
                <template slot="title">
                  <i class="icon-paypal smaller"></i>
                  Sell Beats
                </template>
                <el-menu-item index="2-1">
                  Airbit Features
                </el-menu-item>
                <el-menu-item index="2-2">
                  The Infinity Store
                </el-menu-item>
                <el-menu-item index="2-3">
                  YouTube Content ID
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <i class="icon-speedometer"></i>
              Dashboard
            </b-nav-item>
            <b-nav-item href="#">
              <i class="icon-user"></i>
              Sign Up
            </b-nav-item>
            <b-nav-item href="#" class="cart-toggle d-lg-inline-block d-none">
              <i class="fa fa-shopping-cart"></i>
            </b-nav-item>
            <b-nav-item-dropdown
              right
              class="guest-menu d-lg-inline-block d-none"
            >
              <template v-slot:button-content>
                <i class="fa fa-user-circle-o"></i>
              </template>
              <b-dropdown-item href="#">
                <i class="icon-login"></i>
                Login
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="icon-speedometer"></i>
                Dashboard
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="icon-basket"></i>
                My Purchases
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>

<style lang="scss">
.navbar-wrapper {
  height: 60px;
  background: #1e191f;
  margin-bottom: 25px;
  nav.navbar {
    width: 100%;
    height: 60px;
    padding: 0 !important;
    @media (max-width: 992px) {
      height: auto;
      .container {
        max-width: 95% !important;
      }
    }
    .navbar-brand {
      @media (max-width: 992px) {
        height: 60px;
        line-height: 60px;
        padding: 0;
      }
      img.logo {
        width: 129px;
      }
      img.mobile-logo {
        width: 28px;
      }
    }
    .navbar-toggler {
      margin-right: auto;
      color: #fff;
      border: none;
      outline: none !important;
      i {
        font-size: 22px;
      }
    }
    .mobile-nav-right {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      li a.nav-link {
        height: 60px !important;
        line-height: 60px !important;
      }
      .dropdown-menu {
        position: absolute !important;
      }
    }
    ul.navbar-nav {
      align-items: center;
      @media (max-width: 992px) {
        align-items: flex-start;
      }
      li.nav-item {
        a.nav-link {
          font-size: 13px;
          color: #fff;
          height: 60px;
          line-height: 60px;
          padding: 0 1rem;
          @media (max-width: 992px) {
            height: 41px;
            line-height: 41px;
          }
          font-weight: 300;
          i:first-child {
            margin-right: 3px;
          }
          &.dropdown-toggle {
            &::after {
              position: relative;
              top: 3px;
            }
          }
          &:hover {
            background: #29252a;
          }
        }
        &.home {
          i {
            font-size: 18px;
            position: relative;
            top: 4px;
          }
        }
        &.guest-menu,
        &.cart-toggle {
          a.nav-link {
            i {
              font-size: 20px;
              position: relative;
              top: 3px;
            }
          }
          .dropdown-toggle::after {
            display: none !important;
          }
        }
        &.guest-menu {
          .dropdown-menu {
            .dropdown-item {
              padding-left: 30px !important;
              padding-top: 6px;
              padding-bottom: 6px;
              position: relative;
              i {
                position: absolute;
                left: 10px;
                top: 7px;
              }
            }
          }
          &.show {
            a.nav-link {
              background: #29252a;
            }
          }
        }
      }
    }
    .dropdown-menu {
      background: #29252a;
      border: 1px solid #343035;
      border-radius: 0;
      margin: 0 !important;
      li a {
        color: #fff;
        font-size: 13px;
        &:hover {
          background: #343035 !important;
        }
      }
    }
    .navbar-collapse {
      background: #1e191f;
      z-index: 1000;
      padding-right: 0;
      padding-left: 0;
      @media (max-width: 992px) {
        border-top: 1px solid #29252a;
        margin: 0 -15px;
        .navbar-nav li,
        .el-menu {
          display: block;
          width: 100%;
        }
      }
      .el-submenu__title {
        padding: 0 1rem;
        font-size: 13px;
        border-bottom: none;
        @media (max-width: 992px) {
          height: 41px;
          line-height: 41px;
        }
        i {
          color: #fff;
        }
        &:hover {
          background: #29252a !important;
        }
      }
    }
  }
}
.el-menu {
  background-color: #29252a !important;
  font-size: 13px;
  border-bottom: none !important;
  &.el-menu--popup {
    border: 1px solid #343035;
    @media (max-width: 992px) {
      border: 1px solid transparent;
    }
    min-width: auto;
    margin-top: 0;
  }
  .el-menu-item {
    height: auto;
    line-height: normal;
    font-size: 13px !important;
    background-color: #29252a !important;
    padding-left: 30px !important;
    padding-right: 20px !important;
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    height: auto !important;
    line-height: normal !important;
    &:hover {
      background: #343035 !important;
    }
  }
  .browse-menu {
    display: flex;
    max-width: 1100px;
    margin: auto;
    justify-content: space-between;
    padding: 20px 10px !important;
    background: #29252a;
    color: #fff;
    width: 100%;
    left: 0;
    top: 59px;
    .browse-menu-title {
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 14px;
      padding: 2px;
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
    .menu-col {
      flex: 1;
      padding: 0 10px;
      border-right: 1px solid #343035;
      &:last-child {
        border: none;
      }
      li a {
        padding: 3px 5px;
        text-decoration: none;
        display: block;
        color: #fff !important;
        &:hover {
          background: #343035 !important;
        }
      }
    }
  }
}
.beats-popup {
  width: 100%;
  left: 0;
  top: 59px;
  padding: 0;
  z-index: 1000;
  border-color: #343035;
}
.el-menu--horizontal.sell-beats-popup,
.el-menu--horizontal.beats-popup {
  @media (max-width: 992px) {
    width: 100%;
  }
}
</style>
