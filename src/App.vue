<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
export default {
  name: "App",

  methods: {},

  components: {},
};
</script>
