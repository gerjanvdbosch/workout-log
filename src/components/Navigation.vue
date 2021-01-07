<template>
  <v-bottom-navigation
      :value="value"
      color="primary"
      fixed
  >
    <v-btn
        v-for="item in items"
        :to="{ name: item.route }"
        replace
        exact
    >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Navigation',
    data: () => ({
      items: [
        {
          icon: 'fa-user',
          route: 'profile'
        },
        {
          icon: 'fa-dumbbell',
          route: 'workout'
        },
      ]
    })
  });
</script>
