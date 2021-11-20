<template>
  <div class="post-wrapper">
    <div class="post-header">
      <img :src="require(`../../assets/jpg/${post_data.jpg}`)" alt="" class="post-jpg">
      <div class="post-header-text-stars">
        <div class="post-header-name">{{post_data.name}}</div>
        <div class="post-header-stars"></div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post_data: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style lang="sass">
.post-wrapper
  height: 100px
  display: flex
  .post-header
    align-self: flex-start
    padding-left: 8px
    padding-top: 8px
    padding-bottom: 8px
    display: flex
    .post-jpg
      width: 36px
      height: 36px
      border-radius: 50%
      margin-right: 8px
    .post-header-text-stars
      height: 36px
      font-family: "Gilroy Semibold", serif
      font-size: 15px
      font-weight: 600
      line-height: 20px
      .post-header-stars
        height: 16px
        width: 80px
        background-image: url("../../assets/svg/star_active.svg")
        background-repeat: repeat-x
        background-size: 16px 16px


@font-face
  font-family: "Gilroy Semibold"
  src: url("../../assets/fonts/gilroy-semibold.ttf")


</style>