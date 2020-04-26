<template>
  <div class="container">
    <nav-bar />
    <main class="main">
      <h1>Tic Tac Toe</h1>
      <p>{{ message }}</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: `Welcome to the world's most over-engineered tic-tac-toe game`,
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  margin: 0;
}

.main {
  padding: 20px;
}
</style>
