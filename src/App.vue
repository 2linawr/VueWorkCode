<template>
  <div id="app">
    <MainPages/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainPages from '../src/pages/MainPages/MainPAges';

export default {
  name: "app",
  computed: mapGetters(["allPosts"]),
  methods: mapActions(["fetchPosts"]),
  components:{MainPages},
};
</script>

