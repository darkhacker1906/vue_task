<script setup>
const vFocus = {
  mounted: (el) => el.focus()
}
import { computed, watch } from "vue";
import { useStore } from "vuex";


const store = useStore();

const handleIncrease = () => {
  store.dispatch('increase');
}

const handleDecrease = () => {
  store.dispatch('decrease');
}

const count = computed(() => store.state.count);

const doubleCount = computed(() => count.value * 2);

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});
</script>

<template>
  <div class="main_div">
    <div class="center_div">
        <button @click="handleIncrease">Increment</button>
        <p>{{ count }}</p>
        <button @click="handleDecrease">Decrement</button>
    </div>
    <h3>Doubled count: {{ doubleCount }}</h3>
    <div><input type="text" v-focus/></div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main_div{
  height: 100vh;
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center_div{
  height: 30px;
  width: 300px;
  display: flex;
}
p{
  margin: 0px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
}
</style>
