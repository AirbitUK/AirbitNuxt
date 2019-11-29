<template>
  <div class="search-wrapper">
    <input
      v-model="query"
      type="text"
      placeholder="Search beat, producer or #tag"
    />
    <el-button v-if="query" class="clear-search" type="default" size="small">
      <i class="fa fa-times text-muted"></i>
    </el-button>
    <el-button class="search" type="default" size="small">
      <i class="fa fa-search"></i>
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/_variables.scss';
.search-wrapper {
  position: relative;
  height: 45px;
  input {
    width: 100%;
    border: none;
    padding: 12px;
    border-radius: 5px;
    background: #29252a !important;
    font-size: 13px;
    color: #fff;
    height: 100%;
    &:focus {
      outline: none;
      border: none;
    }
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 45px;
    background-color: $main-color;
    border-color: $main-color;
    font-size: 14px;
    i {
      color: #fff;
    }
    &.clear-search {
      background-color: transparent;
      border-color: transparent;
      right: 45px;
      &:hover {
        background-color: transparent !important;
        border-color: transparent !important;
      }
    }
    &:hover {
      background-color: $main-color;
      border-color: $main-color;
    }
  }
}
</style>
