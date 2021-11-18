<template>
  <div class="carder-wrapper">
    <PlaceCard
        v-for="product in this.$store.state.products"
        :key="product.id"
        :card_data="product"
    />
  </div>
</template>

<script>
import PlaceCard from "@/components/body/PlaceCard";

export default {
  name: "Carder",
  components:{
    PlaceCard
  },

}
</script>

<style scoped>

</style>