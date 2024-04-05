<template>
  <h1 ref="user">This is my user comp for testing unmounted and beforeunmounted</h1>
</template>

<script>
export default {
beforeUnmount(){
    console.log("beforeUnmount",this.$refs['user']);
},
unmounted(){
    console.log("After unmounting",this.$refs['user']);
}
}
</script>

<style>

</style>