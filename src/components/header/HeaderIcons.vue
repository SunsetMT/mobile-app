<template>
  <div class="icons">
    <img src="../../assets/jpg/Avatar1.jpg" alt="Avatar" class="avatar-jpg">
    <button v-if="active" class="bell-btn-jpg" @click="active = !active"></button>
    <button v-if="!active" class="bell-btn-active-jpg" @click="active = !active"></button>
  </div>
</template>

<script>
export default {
  name: "HeaderIcons",
  data: function () {
    return {
      active: true
    }
  }
}
</script>

<style lang="sass">

.icons
  display: flex
  justify-content: space-between
  align-items: center

  .avatar-jpg
    width: 36px
    height: 36px


  .bell-btn-jpg
    margin-right: 4px
    background-image: url("../../assets/svg/small-bell.svg")
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 19.5px 16px
    border: inherit
    border-radius: 50%
    background-color: inherit
    width: 16px
    height: 19.5px

  .bell-btn-active-jpg
    margin-right: 4px
    background-image: url("../../assets/svg/small-bell-activated.svg")
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 19.5px 16px
    border: inherit
    border-radius: 50%
    background-color: inherit
    width: 16px
    height: 19.5px


</style>