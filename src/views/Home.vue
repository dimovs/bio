<template>
  <div class="page--entry">
    <div class="page__header">
      <h1>
      Здравствуйте!
      Вы попали на мою страничку.
      </h1>
      <router-link class="page__enter-link" to="/main/bio" replace>Войти</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.page--entry {
  height: 100%;
  background-color: #fff8dc;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.page__enter-link {
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
}

.page__enter-link:hover {
  color: red;
}
</style>
