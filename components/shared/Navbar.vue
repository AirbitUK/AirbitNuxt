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
              <i class="fa fa-home"></i>
            </b-nav-item>
            <b-nav-item href="#">
              <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#1e191f"
                text-color="#fff"
              >
                <el-submenu index="2">
                  <template slot="title">
                    <i class="fa fa-music"></i>
                    Beats
                  </template>
                  <el-menu-item index="2-1">item one</el-menu-item>
                  <el-menu-item index="2-2">item two</el-menu-item>
                  <el-menu-item index="2-3">item three</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </b-nav-item>
            <!-- <b-nav-item-dropdown text="Beats" right>
              <template v-slot:button-content>
                <i class="fa fa-music"></i>
                Beats
              </template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->
            <b-nav-item href="#">
              <i class="fa fa-trophy"></i>
              Top Charts
            </b-nav-item>
            <b-nav-item-dropdown text="Beats" right>
              <template v-slot:button-content>
                <i class="fa fa-paypal"></i>
                Sell Beats
              </template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <i class="fa fa-paper-plane"></i>
              Dashboard
            </b-nav-item>
            <b-nav-item href="#">
              <i class="fa fa-user"></i>
              Sign Up
            </b-nav-item>
            <b-nav-item href="#">
              <i class="fa fa-shopping-cart"></i>
            </b-nav-item>
            <b-nav-item-dropdown text="Lang" right>
              <template v-slot:button-content>
                <i class="fa fa-user-circle"></i>
              </template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
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
            margin: 0 8px;
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
          }
          &.home {
            i {
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}
</style>
