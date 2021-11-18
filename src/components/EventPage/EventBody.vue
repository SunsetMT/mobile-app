<template>
  <div class="event-body-template">
    <img :src="require(`../../assets/jpg/Map.jpg`)" class="map-jpg">
    <div class="description">
      На этой экскурсии вы узнаете о тёмной стороне жизни Северной столицы! Речь пойдет о знаменитой торговой Сенной
      площади, – «Чрева Петербурга», - которая долгое время была одним из наиболее криминальных и неблагоприятных мест
      нашего города.
    </div>

  </div>
</template>

<script>
export default {
  name: "EventBody"
}
</script>

<style lang="sass">
.event-body-template
  width: 366px
  padding-bottom: 65px
  .map-jpg
    width: 366px
    height: 216px

  .description
    margin-top: 16px
    font-family: "Gilroy Regular"
    font-size: 17px
    line-height: 22px



@font-face
  font-family: "Gilroy Regular"
  src: url("../../assets/fonts/gilroy-regular.ttf")

</style>