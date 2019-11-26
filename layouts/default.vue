<template>
  <div class="wrapper">
    <div>
      <Navbar />
      <div class="wrapper-content">
        <div class="container-fluid">
          <div class="wrapper-container">
            <div class="row">
              <div class="col-md-12 search-col">
                <Searchbox />
              </div>
              <div class="col-md-12">
                <div class="page-content mt-4">
                  <nuxt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/shared/Navbar.vue'
import Searchbox from '~/components/shared/Searchbox.vue'

export default {
  components: {
    Navbar,
    Searchbox
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
@media (min-width: 1200px) {
  .container-fluid {
    max-width: 1140px;
  }
}
.wrapper-container .search-col {
  padding-right: 8px !important;
  padding-left: 8px !important;
}
</style>
