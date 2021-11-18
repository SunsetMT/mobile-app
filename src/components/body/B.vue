<template>
  <div class="body-wrapper">
    <SearchBox/>
    <Carder/>
  </div>
</template>

<script>
import Carder from "@/components/body/Carder";
import SearchBox from "@/components/body/seacrh/SearchBox";

export default {
  name: "B",
  components: {
    Carder,
    SearchBox
  },
}
</script>

<style lang="sass">

.body-wrapper
  margin-top: 8px
  margin-left: 12px
  margin-right: 12px
  padding-bottom: 38px

</style>