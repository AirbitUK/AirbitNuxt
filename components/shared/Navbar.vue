<template>
  <div class="navbar-wrapper">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <img src="/airbit-white.svg" alt="airbit" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link home" href="#">
                <i class="fa fa-home"></i>
                <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-music"></i>
                Beats
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-trophy"></i>
                Top Charts
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-music"></i>
                Sell Beats
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> -->
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.navbar-wrapper {
  height: 60px;
  background: #1e191f;
  margin-bottom: 25px;
  nav.navbar {
    width: 100%;
    .navbar-brand {
      img {
        width: 129px;
      }
    }
    .navbar-toggler {
    }
    .navbar-collapse {
      ul.navbar-nav {
        li.nav-item {
          a.nav-link {
            font-size: 13px;
            color: #fff;
            margin: 0 8px;
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
}
</style>
