<template>
  <h2  class="header">Форма обратной связи</h2>
  <div class="form__wrapper">
    <form v-if="!isSent" action="/" method="post" class="form" @submit.prevent="handleSubmit">
    <div>
      <label for="name">Введите ваше имя: </label>
      <input type="text" name="name" id="name" required>
    </div>

    <div>
      <label for="email">Введите ваш email: </label>
      <input type="email" name="email" id="email" required>
    </div>

    <div>
      <label for="idea">Введите ваши пожелания:</label>
      <textarea id="idea" name="story" rows="5" cols="33" required></textarea>
    </div>

    <div class="form-example">
      <button type="submit">Отправить</button>
    </div>
  </form>
    <div v-else>
      Спасибо! Я обязательно рассмотрю ваши предложения!
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Application',
  setup () {
    const isSent = ref(false)
    const handleSubmit = () => {
      isSent.value = true
    }

    return {
      handleSubmit,
      isSent
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  text-align: center;
}

label {
  display: block;
}

.form__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}
</style>
