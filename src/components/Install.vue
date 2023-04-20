<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { token } = route.query
const noToken = ref(false)

const requestString = `${import.meta.env.VITE_MONDAY_OAUTH_URL}/authorize?client_id=${import.meta.env.VITE_MONDAY_CLIENT_ID}&state=${token}&redirect_uri=${import.meta.env.VITE_MONDAY_REDIRECT}`
console.log(requestString)

const install = () => {
  window.location.href = requestString
}

onMounted(() => {
  console.log(import.meta.env.VITE_MONDAY_REDIRECT)
  // do monday OAuth as user via vizzy server where it builds Vizzy column
  if (!token) {
    noToken.value = true
    return
  }

  window.location.href = requestString
})
</script>

<template>
  <div>Installing vizzy...</div>
  <br />
  <div v-if="noToken">Please go to "Integrations Center" on your <a href="https://www.monday.com">monday.com</a> workspace
    to install Vizzy to your board.</div>
</template>