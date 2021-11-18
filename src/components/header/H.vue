<template>
  <div class="header-wrapper">
    <HeaderIcons/>
    <HeaderTitle/>
  </div>
</template>

<script>
import HeaderIcons from "@/components/header/HeaderIcons";
import HeaderTitle from "@/components/header/HeaderTitle";

export default {
  name: "H",
  components: {
    HeaderIcons,
    HeaderTitle
  }
}
</script>

<style lang="sass">
.header-wrapper
  margin-left: 12px
  margin-right: 12px
</style>