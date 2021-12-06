<template>
  <h2  class="header">Моя друзья</h2>
  <p class="text">
    У меня много друзей. Мы вместе проводим все свободное время за рукоделием.
  </p>
  <ul class="images">
    <li class="images__item">
      <a href="/img/friends2.8393ef6c.jpg" target="_blank">
        Это мы на вечеринке
        <img src="../assets/friends2.jpg" alt="Мои друзья">
      </a>
    </li>
    <li class="images__item">
      <a href="/img/friends2.8393ef6c.jpg" target="_blank">
        Это мы в походе
      <img src="../assets/friends2.jpg" alt="Мои друзья">
      </a>
    </li>
    <li class="images__item">
      <a href="/img/friends2.8393ef6c.jpg" target="_blank">
        Это мы на вечеринке
      <img src="../assets/friends2.jpg" alt="Мои друзья">
      </a>
    </li>
    <li class="images__item">
      <a href="/img/friends2.8393ef6c.jpg" target="_blank">
        Это мы в походе
      <img src="../assets/friends2.jpg" alt="Мои друзья">
      </a>
    </li>
    <li class="images__item">
      <a href="/img/friends2.8393ef6c.jpg" target="_blank">
        Это мы на вечеринке
      <img src="../assets/friends2.jpg" alt="Мои друзья">
      </a>
    </li>
    <li class="images__item">
      <a href="/img/friends2.8393ef6c.jpg" target="_blank">
        Это мы на вечеринке
      <img src="../assets/friends2.jpg" alt="Мои друзья">
      </a>
    </li>
    <li class="images__item">
      <a href="/img/friends2.8393ef6c.jpg" target="_blank">
        Это мы на вечеринке
      <img src="../assets/friends2.jpg" alt="Мои друзья">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Friends'
}
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  text-align: center;
}

.text {
  margin-bottom: 30px;
}

.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px 20px;
}

.images__item {
  text-align: center;
  width: 250px;
}
</style>
