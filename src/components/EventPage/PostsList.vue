<template>
  <div class="posts-list-wrapper">
    <Post
        v-for="post in REVIEWS"
        :key="post.id"
        :post_data="post"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Post from "@/components/EventPage/Post";

export default {
  name: "PostsList",
  components: {
    Post
  },
  computed: {
    ...mapGetters([
        'REVIEWS'
    ])
  }
}
</script>

<style lang="sass">
.posts-list-wrapper
  width: 366px
  margin-left: 12px
  margin-right: 12px


</style>