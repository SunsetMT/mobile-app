<template>
  <div v-if="this.card_data.title.toLowerCase().includes(this.QUE.toLowerCase())" class="place-card-wrapper">
    <router-link :to="{name: 'test', params: {card_data: this.card_data}}">
      <img :src="require(`../../assets/jpg/${card_data.image}`)" class="product-jpg">
    </router-link>
    <div class="card-title">{{this.card_data.title}}</div>
    <div class="grey-small-text">{{this.card_data.text}}</div>
    <div class="star-mark-box">
      <div class="star">
        <img src="../../assets/svg/star.svg" alt="star" class="star-svg">
        <div class="star-value">{{this.card_data.star}}</div>
      </div>
      <div class="mark1">
        <img src="../../assets/svg/mark1.svg" alt="mark1" class="mark1-svg">
        <div class="mark1">{{this.card_data.mark}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "PlaceCard",
  props: {
    card_data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters([
        "QUE"
    ])
  }
}
</script>

<style lang="sass">

.page-wrapper-wrapper

  .product-jpg
    width: 366px
    height: 216px

  .card-title
    font-family: "Gilroy Bold", serif
    font-size: 22px
    line-height: 28px
    font-weight: 700
    margin-top: 4px
    text-align: left

  .grey-small-text
    font-family: "Gilroy Regular", serif
    font-size: 15px
    line-height: 20px
    text-align: left
    margin-top: 4px

  .star-mark-box
    display: flex
    width: 101px
    height: 32px
    position: relative
    background-color: darkgrey
    backdrop-filter: blur(4px)
    top: -91px
    left: 265px
    justify-content: space-evenly
    align-items: center

    .star
      display: flex
      justify-content: space-between
      width: 36px
      height: 16px
      font-family: "Gilroy Regular"
      font-size: 12px

      .star-svg
        width: 16px
        height: 16px

    .mark1
      display: flex
      justify-content: space-between
      width: 33px
      height: 16px
      font-family: "Gilroy Regular"
      font-size: 12px
      .mark1-svg
        width: 16px
        height: 16px



    


@font-face
  font-family: "Gilroy Bold"
  src: url("../../assets/fonts/gilroy-bold.ttf")

@font-face
  font-family: "Gilroy Regular"
  src: url("../../assets/fonts/gilroy-regular.ttf")


</style>