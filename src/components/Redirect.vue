<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const { code, state } = route.query

onMounted(async () => {
  // send code to server, it builds Vizzy column, get access_token back

  console.log(code)
  // 2. send code to backend where it gets a token, verifies, and sends back. 
  const getTokenUrl = `${import.meta.env.VITE_VIZ_SERVER_URL}${import.meta.env.VITE_GET_TOKEN_SERVER_PATH}`
  let data, error
  const options = {
    method: 'POST',
    url: getTokenUrl,
    headers: { 'Content-Type': 'application/json' },
    data: { code, state }
  };
  try {
    const res = await axios.request(options)
    data = res.data
    console.log(data)
    window.location.href = data.backToUrl
  } catch (err) {
    console.log(err)
    error = err
  }
})
</script>

<template>
  Installing Vizzy...
</template>