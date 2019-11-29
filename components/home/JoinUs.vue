<template>
  <div class="join-us-wrapper">
    <h3 class="first-heading">DON'T WAIT</h3>
    <h3 class="second-heading">JOIN TODAY</h3>
    <p>
      Buy and sell beats using the world's leading beat marketplace.
    </p>
    <p>
      Over 300,000 musicians can't be wrong.
    </p>
    <a href="" class="btn join-btn">Sign Up Now</a>
  </div>
</template>

<style lang="scss">
@import '~assets/css/_variables.scss';
.join-us-wrapper {
  text-align: center;
  background: transparent !important;
  padding: 25px;
  .first-heading {
    color: $main-color;
    font-weight: 300;
    font-size: 28px;
  }
  .second-heading {
    font-size: 34px;
    font-weight: 600;
  }
  p {
    font-size: 17px;
    color: #9c8fa0;
  }
  a.join-btn {
    background-color: $main-color;
    font-size: 14px;
    padding: 10px 40px;
    margin: 10px 0 15px;
    color: #fff !important;
    transition: all 0.2s ease;
    &:hover {
      background-color: darken($main-color, 5%);
    }
  }
}
</style>
