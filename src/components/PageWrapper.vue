<template>
  <div class="page-wrapper-wrapper">
    <H/>
    <B/>
    <F/>
  </div>
</template>

<script>
import H from "@/components/header/H"
import B from "@/components/body/B"
import F from "@/components/footer/F"

export default {
  name: "PageWrapper",
  components: {
    H,
    B,
    F
  }
}
</script>

<style lang="sass">

.page-wrapper-wrapper
  margin: auto
  width: 390px




</style>