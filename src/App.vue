<template>
<navbar-comp/>
<router-view></router-view>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue'
export default {
components:{
NavbarComp
}
}
</script>
<style scoped>
</style>