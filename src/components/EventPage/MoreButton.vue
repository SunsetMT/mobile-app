<template>
  <button class="more-button">
    <span class="more-text">Подробнее</span>
  </button>

</template>

<script>
export default {
  name: "MoreButton",

}
</script>

<style lang="sass">
.more-button
  width: 366px
  height: 48px
  margin: 16px 12px 0 12px
  border: 1px solid #000000
  background-color: inherit
  background-image: url("../../assets/svg/More_arrow.svg")
  background-size: 10px 5px
  background-repeat: no-repeat
  background-position: left 231.5px top 22px

  .more-text
    margin-right: 23px
    font-family: "Gilroy Semibold",serif
    font-size: 17px
    line-height: 22px
    font-weight: 600



@font-face
  font-family: "Gilroy Semibold"
  src: url("../../assets/fonts/gilroy-semibold.ttf")


</style>