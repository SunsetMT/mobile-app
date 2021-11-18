<template>
  <div class="footer-menu-element-wrapper">
    <button :style="styleObject">
    </button>
  </div>
</template>

<script>
export default {
  name: "FooterMenuElement",
  props: {
    menu_product: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    styleObject: function () {
      return {
        height: '56px',
        width: '56px',
        border: 'inherit',
        background: 'url(' + require(`../../assets/svg/${this.menu_product.svg}`) + ')',
        backgroundSize: '56px 56px',
        color: 'red'
      }
    }
  }


}
</script>

<style lang="sass">
.footer-menu-element-wrapper
  button
    background: url("")

</style>