<template>
  <div class="reviews-wrapper">
    <div class="reviews-header">
      <span class="reviews-header-title">Оценки и отзывы</span>
      <span class="reviews-header-score">4,8</span>
    </div>

    <button class="make-review">
      Добавить отзыв
    </button>

  </div>
</template>

<script>
export default {
name: "Reviews"
}
</script>

<style lang="sass">
.reviews-wrapper
  margin: 24px 12px 16px 12px

  .reviews-header
    height: 28px
    display: flex
    justify-content: space-between
    align-items: center
    .reviews-header-title
      font-family: "Gilroy Semibold",serif
      font-size: 20px
      line-height: 24px
      font-weight: 600
    .reviews-header-score
      font-family: "Gilroy Bold", serif
      font-size: 22px
      line-height: 28px
      font-weight: 700

  .make-review
    margin-top: 16px
    width: 366px
    height: 48px
    background-color: #434244
    color: #ffffff
    font-family: "Gilroy Semibold", serif
    font-size: 17px
    line-height: 22px
    font-weight: 600

@font-face
  font-family: "Gilroy Semibold"
  src: url("../../assets/fonts/gilroy-semibold.ttf")

@font-face
  font-family: "Gilroy Bold"
  src: url("../../assets/fonts/gilroy-bold.ttf")

</style>