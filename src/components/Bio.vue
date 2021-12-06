<template>
  <h2 class="header">О себе</h2>
  <div class="content">
    <p class="content__text">
      Меня зовут Анастасия. Я живу в  очень красивом городке, в котором есть много достопримечательностей.
    </p>
    <div class="content__image">
      <img src="../assets/me.jpeg" alt="Я в детстве">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bio'
}
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  text-align: center;
}

.content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.content__text {
  flex: 1 1;
}

.content__image {
  flex: 0 0 50%;
}
</style>
