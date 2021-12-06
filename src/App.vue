<template>
  <router-view/>
</template>

<style>
*,
::after,
::before {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

h1, h2, p {
  margin-top: 0;
  margin-bottom: 0;
}

html,
body,
#app {
  height: 100%;
}

html {
  background-color: whitesmoke;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

body {
  margin: 0;
}

a {
 color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
}
</style>
