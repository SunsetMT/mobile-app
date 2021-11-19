<template>
  <div class="footer-menu-element-wrapper">
    <button v-if="menu_product.isActive" :style="styleActive"></button>
    <button v-if="!menu_product.isActive" :style="styleUnActive" @click="switchButtons(menu_product.id)"></button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {

  name: "FooterMenuElement",
  data: () => {
    return {
      isActive: false
    }
  },

  props: {
    menu_product: {
      type: Object,
      default: () => {
      }
    },
  },

  computed: {
    styleActive: function () {
      return {
        height: '56px',
        width: '56px',
        border: 'inherit',
        background: 'url(' + require(`../../assets/svg/${this.menu_product.altSvg}`) + ')',
        backgroundSize: '56px 56px',
        color: 'red'
      }
    },
    styleUnActive: function () {
      return {
        height: '56px',
        width: '56px',
        border: 'inherit',
        background: 'url(' + require(`../../assets/svg/${this.menu_product.svg}`) + ')',
        backgroundSize: '56px 56px',
        color: 'red'
      }
    }
  },

  methods: {
    ...mapActions([
        'MAKE_SWITCH_BUTTONS'
    ]),

    switchButtons: function (index) {
      this.MAKE_SWITCH_BUTTONS(index)
    },

  }


}
</script>

<style lang="sass">
.footer-menu-element-wrapper
  button
    background: url("")

</style>