<template>
  <Mapping />
</template>

<script setup lang="ts">
import Mapping from "./components/Mapping.vue";
import {onMounted } from "vue";
import { io } from './composables/io'


const { ioMountend } = io()
onMounted(() => {
  ioMountend()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
