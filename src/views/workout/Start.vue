<template>
  <div>
    <v-app-bar elevation="1">
      <v-toolbar-title>Workout</v-toolbar-title>
    </v-app-bar>

    <v-container fluid>
      <div class="font-weight-bold grey--text mb-2">Quick start</div>

      <v-card :to="{ name: 'workout_session' }" replace>
        <v-card-text class="pt-3">
          <v-icon color="primary" small class="mr-4 mb-1">fa-plus</v-icon>
          <span class="body-1 grey--text text--lighten-2">Start empty workout</span>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Start'
  });
</script>
