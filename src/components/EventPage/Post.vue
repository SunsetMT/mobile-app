<template>
  <div class="post-wrapper">
    <div class="post-header">
      <img :src="require(`../../assets/jpg/${post_data.jpg}`)" alt="" class="post-jpg">
      <div class="post-header-text-stars">
        <div class="post-header-name">{{ post_data.name }}</div>
        <div class="post-header-stars"></div>
      </div>


    </div>
    <div class="review-text">
      {{ post_data.text }}
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
  background-color: rgba(67, 66, 68, 0.08)
  margin-bottom: 16px

  .post-header
    align-self: flex-start
    padding-left: 8px
    padding-top: 8px
    margin-bottom: 8px
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
        width: 88px
        background-image: url("../../assets/svg/star_active.svg")
        background-repeat: repeat-x
        background-size: 18px 16px

  .review-text
    padding: 0 8px 8px 8px
    text-align: left
    font-family: "Gilroy Regular", serif
    font-size: 13px
    line-height: 18px
    font-weight: 400
    margin-top: 8px


@font-face
  font-family: "Gilroy Semibold"
  src: url("../../assets/fonts/gilroy-semibold.ttf")

@font-face
  font-family: "Gilroy Regular"
  src: url("../../assets/fonts/gilroy-regular.ttf")


</style>