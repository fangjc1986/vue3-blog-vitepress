<script setup lang="ts"></script>

<template>
  <v3-drag-zoom-container style="width: 600px; height: 400px; background-color: #ccc">
    <div
      class="flex-column flex-same"
      style="background-color: darkred; height: 500px; width: 900px"
    >
      <div class="flex-grow flex-horiz flex-same" v-for="i in 10">
        <div class="border-box bca-border" v-for="i in 10"></div>
      </div>
    </div>
  </v3-drag-zoom-container>
</template>
