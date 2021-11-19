<template>
  <div class="footer-menu-wrapper">
    <FooterMenuElement
        v-for="product in BUTTONS"
        :key="product.id"
        :menu_product="product"
    />
  </div>
</template>

<script>
import FooterMenuElement from "@/components/footer/FooterMenuElement";

import {mapGetters} from 'vuex'

export default {
  name: "FooterMenu",
  components: {
    FooterMenuElement
  },
  computed: {
    ...mapGetters([
      'BUTTONS'
    ]),
  }
}
</script>

<style lang="sass">
.footer-menu-wrapper
  display: flex
  background-color: white
  justify-content: space-between
  padding-left: 11px
  padding-right: 11px

</style>