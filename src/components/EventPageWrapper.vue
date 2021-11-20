<template>
  <div class="event-page-wrapper">
    <EventHeader :card_data="card_data"/>
    <EventBody/>
<!--    <F/>-->
  </div>
</template>

<script>
import EventHeader from "@/components/EventPage/EventHeader";
import EventBody from "@/components/EventPage/EventBody";
/*import F from "@/components/footer/F"*/
export default {
  name: "EventPageWrapper",
  components: {
    EventHeader,
    EventBody,
    // F
  },
  props: {
    card_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass">

.event-page-wrapper
  width: 390px
  margin: auto
</style>