<template>
  <div class="header-title-wrapper">
    <div class="bold-title">
      Привет, Кристиан!
    </div>
    <div class="grey-small-text">
      Куда отправимся сегодня?
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle"
}
</script>

<style lang="sass">

.header-title-wrapper
  margin-top: 24px

  .bold-title
    font-family: "Gilroy Bold", serif
    font-weight: bold
    font-size: 28px
    text-align: left

  .grey-small-text
    font-family: "Gilroy Regular", serif
    font-size: 15px
    line-height: 20px
    text-align: left
    margin-top: 4px


@font-face
  font-family: "Gilroy Bold"
  src: url("../../assets/fonts/gilroy-bold.ttf")

@font-face
  font-family: "Gilroy Regular"
  src: url("../../assets/fonts/gilroy-regular.ttf")

</style>