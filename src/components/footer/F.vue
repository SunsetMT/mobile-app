<template>
  <div class="footer-wrapper ">
    <FooterMenu/>
  </div>
</template>

<script>
import FooterMenu from "@/components/footer/FooterMenu";
export default {
  name: "F",
  components: {
    FooterMenu
  }
}
</script>

<style lang="sass">

.footer-wrapper

  width: 366px
  height: 56px
  position: fixed
  bottom: 0
  margin-left: 12px
  left: auto
  right: auto


</style>