<template>
  <div class="navbar-wrapper">
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="#">
          <img src="/airbit-white.svg" alt="airbit" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#home" class="home">
              <i class="home-icon icon-home"></i>
            </b-nav-item>
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#1e191f"
              text-color="#fff"
            >
              <el-submenu index="2">
                <template slot="title">
                  <i class="icon-music-tone smaller"></i>
                  Beats
                </template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
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
              <el-submenu index="2">
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
            <b-nav-item href="#" class="cart-toggle">
              <i class="fa fa-shopping-cart"></i>
            </b-nav-item>
            <b-nav-item-dropdown text="Lang" right class="guest-menu">
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
      </b-navbar>
    </div>
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
    .navbar-brand {
      img {
        width: 129px;
      }
    }
    .navbar-toggler {
    }
    .navbar-collapse {
      ul.navbar-nav {
        align-items: center;
        li.nav-item {
          a.nav-link {
            font-size: 13px;
            color: #fff;
            height: 60px;
            line-height: 60px;
            padding: 0 1rem;
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
      .el-submenu__title {
        padding: 0 1rem;
        font-size: 13px;
        border-bottom: none;
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
    min-width: auto;
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
}
</style>
