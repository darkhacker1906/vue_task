<template>
  <h1>This is the about page</h1>
  <button @click="show=false">Hide the below comp</button>
  <user-view v-if="show"/>
</template>

<script>
import UserView from '@/components/UserView.vue'
export default {
  components: { UserView },
  data(){
    return{
      show:true,
    }
  },
name:'AboutPage'
}
</script>

<style>

</style>