<template>
  <div class="container">
    <nav-bar />
    <main class="main">
      <h1>Tic Tac Toe</h1>
      <p>Welcome to the world's most over-engineered tic-tac-toe game</p>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
}

.main {
  padding: 20px;
}
</style>
