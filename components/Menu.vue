<template>
  <div class="menu">
    <router-link to="/" class="menu-link">Accueil</router-link>
    <router-link to="/about" class="menu-link">A propos</router-link>
    <!--router-link to="/contact" class="menu-link">Contact</router-link-->
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
.menu {
  text-align: center;
  margin-top: 210px;
  margin-bottom: 10px;
}

.menu-link {
  text-decoration: none;
  color: white;
  margin-right: 10px;
  margin-left: 10px;
}

.menu-link:hover {
  font-weight: bold;
}
</style>
