<template>
  <div class="icons">
    <img src="../../assets/jpg/Avatar1.jpg" alt="Avatar" class="avatar-jpg">
    <img src="../../assets/svg/Bell.svg" alt="Bell" class="bell-jpg">
  </div>
</template>

<script>
export default {
name: "HeaderIcons"
}
</script>

<style lang="sass">

.icons
  display: flex
  justify-content: space-between

  .avatar-jpg
    width: 36px
    height: 36px

  .bell-jpg
    margin-right: 4px

</style>