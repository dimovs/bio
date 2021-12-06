<template>
  <div class="page">
    <div class="page__menu">
      <ul class="menu">
        <li class="menu__item">
          <router-link to="/main/bio">Биография</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/main/family">Моя семья</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/main/friends">Моя друзья</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/main/hobbies">Мои увлечения</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/main/application">Анкета</router-link>
        </li>
      </ul>
    </div>
    <div class="page__content">
      <header class="page__header">
        <h1>Моя личная страница</h1>
      </header>
      <main class="page__main">
        <router-view />
      </main>
      <footer class="page__footer">
        <span>Со мной можно связаться по</span> <a href="mailto: tatata@gmail.com" class="mail">tatata@gmail.com</a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.page__menu {
  flex: 0 0 250px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #fff8dc;
  border-right: 5px solid #fada5e;
}

.page__content {
  flex: 1 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.page__header {
  flex: 0 0 100px;
  padding: 10px;
  background-color: #f0e68c;
  border-bottom: 5px solid #fada5e;
  text-align: center;
}

.page__main {
  flex: 1 0;
  padding: 20px;
  background-color: #fff8dc;
}

.page__footer {
  flex: 0 0 100px;
  padding: 10px;
  background-color: #f0e68c;
  border-top: 5px solid #fada5e;
  text-align: center;
}

.menu {
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.menu__item {
  flex: 1 0 100%;
  padding: 5px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.menu__item a:hover {
  color: red;
}

.mail {
  font-weight: bold;
}

.router-link-active {
  color: red;
}
</style>
