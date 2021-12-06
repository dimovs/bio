<template>
  <h2 class="header">Моя семья</h2>
  <p>
    У меня большая семья.
  </p>
  <ul class="family__list">
    <li>мама</li>
    <li>папа</li>
    <li>младший брат Олег</li>
    <li>старшая сестра Марина</li>
  </ul>
  <p>
    Еще у меня есть бабушки и дедушки, которых я очень люблю и часто приезжаю к ним в гости.
    Моя семья очень дружная и веселая.
    Мама работает бухгалтером, папа – врач-педиатр, сестра учится в школе ,а вот брат еще маленький и ходит в садик.
    Каждые выходные мы ездим в гости к бабушкам и дедушкам, они нам рады всегда.
  </p>
</template>

<script>
export default {
  name: 'Family'
}
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  text-align: center;
}
.family__list {
  margin-left: 20px;
  list-style-type: circle;
}
</style>
