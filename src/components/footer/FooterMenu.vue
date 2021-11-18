<template>
  <div class="footer-menu-wrapper">
    <FooterMenuElement
        v-for="product in products"
        :key="product.id"
        :menu_product="product"
    />
  </div>
</template>

<script>
import FooterMenuElement from "@/components/footer/FooterMenuElement";

export default {
  name: "FooterMenu",
  components: {
    FooterMenuElement
  },
  data: function () {
    return {
      products: [
        {id: 1, svg: "Btn_1.svg", link: "#"},
        {id: 2, svg: "Btn_2.svg", link: "#"},
        {id: 3, svg: "Btn_3.svg", link: "#"},
        {id: 4, svg: "Btn_4.svg", link: "#"},
      ]
    }
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