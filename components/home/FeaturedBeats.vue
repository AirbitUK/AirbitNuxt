<template>
  <div class="featured-beats-wrapper">
    <div class="carousel">
      <el-carousel trigger="click" arrow="never" height="390px">
        <el-carousel-item v-for="slide in slides" :key="slide.id">
          <a :href="slide.link">
            <img :src="slide.img" alt="slide" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          link: 'https://airbit.com/jayanthonybeatz/miami-dbmin',
          img:
            'https://cdn.airbit.com/artwork/marketplace/featured/3258db62326eea8212c60f1de4d137c0.jpg'
        },
        {
          id: 2,
          link: 'https://airbit.com/Buckroll/vintage-feel-drake-type-beat',
          img:
            'https://cdn.airbit.com/artwork/marketplace/featured/dfda1726c0e009de17a360b99a95a4fa.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.featured-beats-wrapper {
  margin-bottom: 5px;
  .carousel {
    width: 100%;
    .el-carousel {
      .el-carousel__item {
        a img {
          height: 100%;
          width: 100%;
        }
      }
      .el-carousel__indicators {
        width: 100%;
        position: relative !important;
        .el-carousel__indicator {
          width: 50%;
          padding: 12px 2px !important;
          .el-carousel__button {
            height: 5px;
            width: 100%;
            opacity: 0.8 !important;
            background-color: #727272;
            &:focus {
              outline: 0;
              border: 0;
            }
          }
          &.is-active {
            .el-carousel__button {
              background-color: #b3b3b3;
            }
          }
        }
      }
    }
  }
}
</style>
