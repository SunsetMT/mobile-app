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

import {mapActions} from 'vuex'

export default {
  name: "PageWrapper",
  components: {
    H,
    B,
    F
  },
  methods: {
    ...mapActions([
        'MAKE_CLEAR_QUE'
    ])
  }
}
</script>

<style lang="sass">

.page-wrapper-wrapper
  margin: auto
  width: 390px



</style>