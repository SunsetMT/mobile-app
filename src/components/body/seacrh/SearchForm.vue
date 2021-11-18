<template>
  <div class="search-form-wrapper">
    <input v-model="search" @input="INSERT_IN_QUE(search)" type="text" class="form-control"
           placeholder="Поиск">
    <button class="filter">

    </button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "SearchForm",
  data: function () {
    return {
      search: '',
    }
  },
  methods: {
    ...mapActions([
      "INSERT_IN_QUE"
    ]),
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'QUE'
    ])
  },

}
</script>

<style lang="sass">
.search-form-wrapper
  display: flex
  width: 364px
  height: 36px
  background-color: #434244

  input[type="text"]
    border: none
  input[type="text"]:focus
    outline: none

  input
    border: inherit
    border-radius: 0
    -webkit-appearance: none
    outline: none
    background-color: #eee
    border-top-style: hidden
    border-right-style: hidden
    border-left-style: hidden
    border-bottom-style: groove

  .form-control:focus
    outline: none





  .filter
    width: 40px
    height: 36px
    border: none
    background-image: url("../../../assets/svg/filter_icon.svg")
    background-repeat: no-repeat
    background-position: 50% 50%

</style>