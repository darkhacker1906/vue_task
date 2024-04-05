<template>
  <div class="topnav">
  <router-link class="nav" to="/">Home</router-link>
  <router-link class="nav" to="/about">About</router-link>
  <router-link class="nav" to="/news">News</router-link>
  <router-link class="nav" to="/contact">Contact</router-link>
  <router-link class="nav" to="/reactive">Reactive</router-link>
</div>
</template>

<script>
export default {
name:"NavbarComp",
}
</script>
<style>
.topnav{
  overflow: hidden;
  background-color: #333;
}
.topnav .nav {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav .nav:hover {
  background-color: #ddd;
  color: black;
}

.topnav nav.active {
  background-color: #04AA6D;
  color: white;
}
</style>