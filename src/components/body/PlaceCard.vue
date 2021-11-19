<template>
  <div v-if="this.card_data.title.toLowerCase().includes(this.QUE.toLowerCase())" class="place-card-wrapper">
    <router-link :to="{name: 'test', params: {card_data: this.card_data}}">
      <img :src="require(`../../assets/jpg/${card_data.image}`)" class="product-jpg">
    </router-link>
    <div class="card-title">{{ this.card_data.title }}</div>
    <div class="grey-small-text">{{ this.card_data.text }}</div>
    <div class="star-mark-box">
      <div class="star">
        <img src="../../assets/svg/star.svg" alt="star" class="star-svg">
        <div class="star-value">{{ this.card_data.star }}</div>
      </div>
      <div class="mark1">
        <button v-if="isMarked" @click="unmarkCard(card_data.id)" class="mark-active"></button>
        <button v-if="!isMarked" @click="markCard(card_data.id)" class="mark-disabled"></button>
        <div class="mark1">{{ this.card_data.mark }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "PlaceCard",
  data: function () {
    return {
      isMarked: false,
    }
  },
  props: {
    card_data: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    ...mapGetters([
      "QUE"
    ]),
    styleObject: {
      backgroundImage: 'url("../../assets/svg/mark1.svg")',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      border: 'inherit',
      backgroundColor: 'darkgrey',
      width: '16px',
      height: '16px',
      marginRight: '4px'
    }
  },
  methods: {
    ...mapActions([
        'MAKE_INC_MARK',
        'MAKE_DEC_MARK'
    ]),

    markCard: function (id) {
      this.MAKE_INC_MARK(id)
      this.isMarked = !this.isMarked
    },

    unmarkCard: function (id) {
      this.MAKE_DEC_MARK(id)
      this.isMarked = !this.isMarked
    }


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
    opacity: .72
    display: flex
    width: 101px
    height: 32px
    position: relative
    background-color: #ffffff
    backdrop-filter: blur(4px)
    top: -92px
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

    .mark-disabled
      background-image: url("../../assets/svg/mark1.svg")
      background-position: 50% 50%
      background-repeat: no-repeat
      border: inherit
      background-color: #ffffff
      width: 16px
      height: 16px
      margin-right: 4px

    .mark-active
      background-image: url("../../assets/svg/mark-activated.svg")
      background-position: 50% 50%
      background-repeat: no-repeat
      border: inherit
      background-color: #ffffff
      width: 16px
      height: 16px
      margin-right: 4px


@font-face
  font-family: "Gilroy Bold"
  src: url("../../assets/fonts/gilroy-bold.ttf")

@font-face
  font-family: "Gilroy Regular"
  src: url("../../assets/fonts/gilroy-regular.ttf")


</style>