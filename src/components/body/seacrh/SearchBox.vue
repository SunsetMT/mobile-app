<template>
  <div class="search-box-wrapper">
    <SearchForm/>
  </div>
</template>

<script>
import SearchForm from "@/components/body/seacrh/SearchForm";
export default {
  name: "SearchBox",
  components: {
    SearchForm
  }
}
</script>

<style lang="sass">
.search-box-wrapper
  width: 390px
  margin: 8px 0 8px 0


</style>