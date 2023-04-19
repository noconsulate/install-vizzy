<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { token } = route.query

const requestString = `${import.meta.env.VITE_MONDAY_OAUTH_URL}/authorize?client_id=${import.meta.env.VITE_MONDAY_CLIENT_ID}&state=${token}&redirect_uri=${import.meta.env.VITE_MONDAY_REDIRECT}`
console.log(requestString)

const install = () => {
  window.location.href = requestString
}

onMounted(() => {
  // do monday OAuth as user via vizzy server where it builds Vizzy column


  window.location.href = requestString
})
</script>

<template>
  <div>To install Vizzy, click "install".</div>
  <div><button @click="install">Install</button></div>
</template>