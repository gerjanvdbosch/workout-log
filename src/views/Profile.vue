<template>
  <div>
    <v-app-bar elevation="1">
      <v-toolbar-title>Profile</v-toolbar-title>
    </v-app-bar>

    <v-container fluid>
      <div class="font-weight-bold grey--text mb-2">Dashboard</div>

      <v-row dense>
        <v-col v-for="tile in tiles">
          <v-card :to="{ name: tile.route }">
            <v-card-text class="text-center">
              <v-icon color="primary">{{ tile.icon }}</v-icon>
              <div class="body-1 grey--text text--lighten-2 mt-1">{{ tile.text }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Profile',
    data: () => ({
      tiles: [
        {
          icon: 'fa-dumbbell',
          route: 'profile',
          text: 'Exercises'
        },
        {
          icon: 'fa-child',
          route: 'profile',
          text: 'Measures'
        },
        {
          icon: 'fa-calendar',
          route: 'profile',
          text: 'Calendar'
        },
      ]
    })
  });
</script>
