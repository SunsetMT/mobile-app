<template>
  <div class="event-header-wrapper">
    <div class="event-header-title">{{card_data.title}}</div>
    <div class="event-header-text">{{card_data.text}}</div>
    <img :src="require(`../../assets/jpg/${card_data.image}`)" class="product-jpg">
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "EventHeader",
  props: {
    card_data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
  ...mapGetters([
      'QUE'
  ])
  }
}
</script>

<style lang="sass">

.event-header-wrapper
  margin-bottom: 16px
  margin-top: 16px
  .event-header-title
    font-family: "Gilroy Bold", serif
    font-size: 22px
    line-height: 28px
    font-weight: 700
    margin-top: 4px
    text-align: left

  .event-header-text
    font-family: "Gilroy Regular", serif
    font-size: 15px
    line-height: 20px
    text-align: left
    margin-top: 4px

  .product-jpg
    width: 390px
    height: 256px



@font-face
  font-family: "Gilroy Bold"
  src: url("../../assets/fonts/gilroy-bold.ttf")

@font-face
  font-family: "Gilroy Regular"
  src: url("../../assets/fonts/gilroy-regular.ttf")

</style>