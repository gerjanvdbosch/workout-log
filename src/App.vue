<template>
  <v-app>
    <v-main>
      <router-view/>
      <Navigation/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navigation from '@/components/Navigation.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      Navigation
    }
  });
</script>
